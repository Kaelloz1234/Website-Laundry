import { CustomerNavigation } from '../shared/CustomerNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';

export function LaundryStatus() {
  const orders = [
    {
      id: 'ORD-001',
      package: 'Cuci Kering',
      weight: 3,
      status: 'Antrian',
      lastUpdate: '13 Des 2024, 10:30',
      estimatedTime: '14 Des 2024',
    },
    {
      id: 'ORD-002',
      package: 'Cuci Setrika',
      weight: 5,
      status: 'Proses',
      lastUpdate: '12 Des 2024, 14:20',
      estimatedTime: '13 Des 2024',
    },
    {
      id: 'ORD-003',
      package: 'Setrika Saja',
      weight: 2,
      status: 'Selesai',
      lastUpdate: '11 Des 2024, 16:00',
      estimatedTime: '12 Des 2024',
    },
    {
      id: 'ORD-004',
      package: 'Cuci Lipat',
      weight: 4,
      status: 'Siap Diambil',
      lastUpdate: '10 Des 2024, 09:15',
      estimatedTime: '11 Des 2024',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Antrian':
        return 'bg-gray-100 text-gray-700';
      case 'Proses':
        return 'bg-yellow-100 text-yellow-700';
      case 'Selesai':
        return 'bg-green-100 text-green-700';
      case 'Siap Diambil':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Antrian':
        return Clock;
      case 'Proses':
        return Package;
      case 'Selesai':
        return CheckCircle;
      case 'Siap Diambil':
        return Truck;
      default:
        return Package;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerNavigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Status Laundry</h1>
          <p className="text-gray-600">Pantau status pesanan laundry Anda secara real-time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders.map((order) => {
            const StatusIcon = getStatusIcon(order.status);
            return (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{order.package}</p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <StatusIcon className="w-5 h-5 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Berat Cucian</p>
                        <p className="text-gray-900">{order.weight} kg</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Update Terakhir</p>
                        <p className="text-gray-900">{order.lastUpdate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Estimasi Selesai</p>
                        <p className="text-gray-900">{order.estimatedTime}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
