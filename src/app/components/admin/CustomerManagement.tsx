import { useState } from 'react';
import { AdminLayout } from '../shared/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Edit, Trash2, Search } from 'lucide-react';

export function CustomerManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: '1',
      name: 'Budi Santoso',
      email: 'budi@email.com',
      phone: '08123456789',
      totalOrders: 12,
      joinDate: '01 Jan 2024',
    },
    {
      id: '2',
      name: 'Ani Wijaya',
      email: 'ani@email.com',
      phone: '08234567890',
      totalOrders: 8,
      joinDate: '15 Feb 2024',
    },
    {
      id: '3',
      name: 'Citra Dewi',
      email: 'citra@email.com',
      phone: '08345678901',
      totalOrders: 15,
      joinDate: '22 Mar 2024',
    },
    {
      id: '4',
      name: 'Dedi Rahman',
      email: 'dedi@email.com',
      phone: '08456789012',
      totalOrders: 6,
      joinDate: '10 Apr 2024',
    },
    {
      id: '5',
      name: 'Eka Putri',
      email: 'eka@email.com',
      phone: '08567890123',
      totalOrders: 20,
      joinDate: '05 May 2024',
    },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const handleEdit = (id: string) => {
    console.log('Edit customer:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete customer:', id);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-gray-900 mb-2">Kelola Data Pelanggan</h1>
            <p className="text-gray-600">Lihat dan kelola informasi pelanggan</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Daftar Pelanggan</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Cari pelanggan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telepon</TableHead>
                    <TableHead>Total Pesanan</TableHead>
                    <TableHead>Tanggal Bergabung</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.phone}</TableCell>
                      <TableCell>{customer.totalOrders}</TableCell>
                      <TableCell>{customer.joinDate}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(customer.id)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(customer.id)}
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
            {filteredCustomers.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                Tidak ada pelanggan ditemukan
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
