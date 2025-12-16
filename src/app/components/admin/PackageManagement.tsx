import { useState } from 'react';
import { AdminLayout } from '../shared/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Edit, Trash2, Plus } from 'lucide-react';

export function PackageManagement() {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', price: '' });

  const packages = [
    { id: '1', name: 'Cuci Kering', price: 7000, description: 'Cuci bersih dan keringkan' },
    { id: '2', name: 'Cuci Setrika', price: 10000, description: 'Cuci, setrika, dan lipat rapi' },
    { id: '3', name: 'Setrika Saja', price: 5000, description: 'Setrika dan lipat rapi' },
    { id: '4', name: 'Cuci Lipat', price: 8000, description: 'Cuci dan lipat rapi' },
  ];

  const handleAdd = () => {
    setEditMode(false);
    setFormData({ name: '', price: '' });
    setOpen(true);
  };

  const handleEdit = (pkg: any) => {
    setEditMode(true);
    setFormData({ name: pkg.name, price: pkg.price.toString() });
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    console.log('Delete package:', id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit:', formData);
    setOpen(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-gray-900 mb-2">Kelola Paket Laundry</h1>
            <p className="text-gray-600">Atur paket layanan dan harga</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAdd}>
                <Plus className="w-4 h-4 mr-2" />
                Tambah Paket
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editMode ? 'Edit Paket' : 'Tambah Paket Baru'}</DialogTitle>
                <DialogDescription>
                  {editMode ? 'Ubah informasi paket laundry' : 'Masukkan informasi paket laundry baru'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Paket</Label>
                    <Input
                      id="name"
                      placeholder="Contoh: Cuci Kering"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Harga per Kg (Rp)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Contoh: 7000"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                    Batal
                  </Button>
                  <Button type="submit">
                    {editMode ? 'Simpan' : 'Tambah'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Paket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Paket</TableHead>
                    <TableHead>Harga per Kg</TableHead>
                    <TableHead>Deskripsi</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {packages.map((pkg) => (
                    <TableRow key={pkg.id}>
                      <TableCell>{pkg.name}</TableCell>
                      <TableCell>Rp {pkg.price.toLocaleString()}</TableCell>
                      <TableCell className="text-gray-600">{pkg.description}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(pkg)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(pkg.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
