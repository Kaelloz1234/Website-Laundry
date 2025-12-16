import { CustomerNavigation } from '../shared/CustomerNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Package, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function CustomerDashboard() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Pesanan',
      value: '12',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Sedang Proses',
      value: '2',
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Selesai',
      value: '10',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Transaksi',
      value: 'Rp 450.000',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const recentOrders = [
    { id: 'ORD-001', package: 'Cuci Kering', status: 'Proses', date: '12 Des 2024' },
    { id: 'ORD-002', package: 'Cuci Setrika', status: 'Selesai', date: '10 Des 2024' },
    { id: 'ORD-003', package: 'Cuci Kering', status: 'Siap Diambil', date: '08 Des 2024' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerNavigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Selamat Datang, {user?.name}!</h1>
          <p className="text-gray-600">Berikut adalah ringkasan aktivitas laundry Anda</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <h3 className="text-gray-900">{stat.value}</h3>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-full`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Pesanan Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.package}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        order.status === 'Selesai'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Proses'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {order.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
