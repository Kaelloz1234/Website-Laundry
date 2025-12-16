import { useState } from 'react';
import { AdminLayout } from '../shared/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Download, Calendar, TrendingUp, ShoppingBag, Users } from 'lucide-react';

export function Reports() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const summaryStats = [
    {
      title: 'Total Pesanan',
      value: '45',
      icon: ShoppingBag,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Pendapatan',
      value: 'Rp 2.5M',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Pelanggan Aktif',
      value: '32',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const topPackages = [
    { name: 'Cuci Setrika', orders: 18, revenue: 900000 },
    { name: 'Cuci Kering', orders: 15, revenue: 525000 },
    { name: 'Cuci Lipat', orders: 8, revenue: 320000 },
    { name: 'Setrika Saja', orders: 4, revenue: 100000 },
  ];

  const handleExport = () => {
    console.log('Export report for:', { startDate, endDate });
    // In real app, this would generate and download a report
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-gray-900 mb-2">Laporan Operasional</h1>
          <p className="text-gray-600">Lihat ringkasan dan analisis kinerja laundry</p>
        </div>

        {/* Date Filter */}
        <Card>
          <CardHeader>
            <CardTitle>Filter Laporan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="startDate">Tanggal Mulai</Label>
                <div className="relative">
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Tanggal Akhir</Label>
                <div className="relative">
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <Button onClick={handleExport} disabled={!startDate || !endDate}>
                <Download className="w-4 h-4 mr-2" />
                Export Laporan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {summaryStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.bgColor} p-3 rounded-full`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <h3 className="text-gray-900">{stat.value}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Top Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Paket Terpopuler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPackages.map((pkg, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-gray-900">{pkg.name}</p>
                      <p className="text-sm text-gray-600">{pkg.orders} pesanan</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600">
                        Rp {pkg.revenue.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grafik Pendapatan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Grafik pendapatan akan ditampilkan di sini</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
