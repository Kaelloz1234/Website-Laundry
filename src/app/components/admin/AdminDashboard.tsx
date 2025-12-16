import { AdminLayout } from '../shared/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Users, ShoppingBag, TrendingUp, Package } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    {
      title: 'Total Pelanggan',
      value: '156',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+12%',
    },
    {
      title: 'Total Transaksi',
      value: '1,234',
      icon: ShoppingBag,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+8%',
    },
    {
      title: 'Total Pendapatan',
      value: 'Rp 45.6M',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '+15%',
    },
    {
      title: 'Pesanan Aktif',
      value: '23',
      icon: Package,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      change: '-5%',
    },
  ];

  const recentTransactions = [
    { id: 'TRX-1234', customer: 'Budi Santoso', package: 'Cuci Setrika', amount: 50000, status: 'Lunas' },
    { id: 'TRX-1235', customer: 'Ani Wijaya', package: 'Cuci Kering', amount: 21000, status: 'Pending' },
    { id: 'TRX-1236', customer: 'Citra Dewi', package: 'Setrika Saja', amount: 10000, status: 'Lunas' },
    { id: 'TRX-1237', customer: 'Dedi Rahman', package: 'Cuci Lipat', amount: 32000, status: 'Lunas' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-gray-900 mb-2">Dashboard Admin</h1>
          <p className="text-gray-600">Selamat datang di panel administrasi Sistem Laundry Digital</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.bgColor} p-3 rounded-full`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <h3 className="text-gray-900">{stat.value}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Transaksi Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((trx) => (
                <div
                  key={trx.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="text-gray-900">{trx.id}</p>
                    <p className="text-sm text-gray-600">{trx.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900">{trx.package}</p>
                    <p className="text-sm text-gray-600">Rp {trx.amount.toLocaleString()}</p>
                  </div>
                  <div className="ml-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        trx.status === 'Lunas'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {trx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
