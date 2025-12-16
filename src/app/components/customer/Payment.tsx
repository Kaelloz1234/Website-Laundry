import { useState } from 'react';
import { CustomerNavigation } from '../shared/CustomerNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { CheckCircle, CreditCard, Smartphone, Banknote } from 'lucide-react';

export function Payment() {
  const [selectedOrder, setSelectedOrder] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const pendingOrders = [
    { id: 'ORD-001', package: 'Cuci Kering', amount: 21000 },
    { id: 'ORD-004', package: 'Cuci Lipat', amount: 32000 },
  ];

  const paymentMethods = [
    { id: 'bank', name: 'Transfer Bank', icon: CreditCard },
    { id: 'ewallet', name: 'E-Wallet', icon: Smartphone },
    { id: 'cash', name: 'Tunai', icon: Banknote },
  ];

  const selectedOrderData = pendingOrders.find(order => order.id === selectedOrder);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedOrder('');
      setPaymentMethod('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerNavigation />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Pembayaran</h1>
          <p className="text-gray-600">Lakukan pembayaran untuk pesanan laundry Anda</p>
        </div>

        {showSuccess && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              Pembayaran berhasil! Terima kasih atas transaksi Anda.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pilih Pesanan</CardTitle>
                <CardDescription>Pilih pesanan yang akan dibayar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="order">Pesanan</Label>
                  <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih pesanan" />
                    </SelectTrigger>
                    <SelectContent>
                      {pendingOrders.map((order) => (
                        <SelectItem key={order.id} value={order.id}>
                          {order.id} - {order.package} (Rp {order.amount.toLocaleString()})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metode Pembayaran</CardTitle>
                <CardDescription>Pilih metode pembayaran yang Anda inginkan</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === method.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Icon className="w-5 h-5 text-gray-600" />
                        <Label htmlFor={method.id} className="cursor-pointer flex-1">
                          {method.name}
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedOrderData ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Pesanan:</span>
                        <span className="text-gray-900">{selectedOrderData.id}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Paket:</span>
                        <span className="text-gray-900">{selectedOrderData.package}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="text-gray-900">
                          Rp {selectedOrderData.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Biaya Admin:</span>
                        <span className="text-gray-900">Rp 0</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-900">Total:</span>
                        <span className="text-blue-600">
                          Rp {selectedOrderData.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      disabled={!paymentMethod}
                      onClick={handlePayment}
                    >
                      Bayar Sekarang
                    </Button>
                  </>
                ) : (
                  <p className="text-sm text-gray-500 text-center py-4">
                    Pilih pesanan untuk melihat ringkasan
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
