import { useState } from 'react';
import { CustomerNavigation } from '../shared/CustomerNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { CheckCircle } from 'lucide-react';

export function CreateOrder() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [weight, setWeight] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const packages = [
    { id: '1', name: 'Cuci Kering', price: 7000 },
    { id: '2', name: 'Cuci Setrika', price: 10000 },
    { id: '3', name: 'Setrika Saja', price: 5000 },
    { id: '4', name: 'Cuci Lipat', price: 8000 },
  ];

  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
  const totalCost = selectedPkg && weight ? selectedPkg.price * parseFloat(weight) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedPackage('');
      setWeight('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerNavigation />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Buat Pesanan Laundry</h1>
          <p className="text-gray-600">Isi formulir di bawah untuk membuat pesanan baru</p>
        </div>

        {showSuccess && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              Pesanan berhasil dibuat! Silakan lakukan pembayaran.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Form Pesanan</CardTitle>
            <CardDescription>
              Pilih paket laundry dan masukkan berat cucian Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="package">Paket Laundry</Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih paket laundry" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name} - Rp {pkg.price.toLocaleString()}/kg
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Berat Cucian (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.5"
                  min="1"
                  placeholder="Masukkan berat cucian"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
                <p className="text-sm text-gray-500">Minimum 1 kg</p>
              </div>

              {selectedPkg && weight && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Paket:</span>
                    <span className="text-gray-900">{selectedPkg.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Berat:</span>
                    <span className="text-gray-900">{weight} kg</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Harga per kg:</span>
                    <span className="text-gray-900">Rp {selectedPkg.price.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-blue-200 mt-3 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900">Total Biaya:</span>
                      <span className="text-blue-600">
                        Rp {totalCost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={!selectedPackage || !weight}>
                Konfirmasi Pesanan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
