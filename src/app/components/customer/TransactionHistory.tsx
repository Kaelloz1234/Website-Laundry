import { useState } from 'react';
import { CustomerNavigation } from '../shared/CustomerNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Calendar } from 'lucide-react';

export function TransactionHistory() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const transactions = [
    {
      id: 'TRX-001',
      date: '13 Des 2024',
      orderId: 'ORD-001',
      package: 'Cuci Kering',
      weight: 3,
      total: 21000,
      paymentStatus: 'Lunas',
    },
    {
      id: 'TRX-002',
      date: '12 Des 2024',
      orderId: 'ORD-002',
      package: 'Cuci Setrika',
      weight: 5,
      total: 50000,
      paymentStatus: 'Lunas',
    },
    {
      id: 'TRX-003',
      date: '10 Des 2024',
      orderId: 'ORD-003',
      package: 'Setrika Saja',
      weight: 2,
      total: 10000,
      paymentStatus: 'Lunas',
    },
    {
      id: 'TRX-004',
      date: '08 Des 2024',
      orderId: 'ORD-004',
      package: 'Cuci Lipat',
      weight: 4,
      total: 32000,
      paymentStatus: 'Pending',
    },
    {
      id: 'TRX-005',
      date: '05 Des 2024',
      orderId: 'ORD-005',
      package: 'Cuci Setrika',
      weight: 3,
      total: 30000,
      paymentStatus: 'Lunas',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerNavigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Riwayat Transaksi</h1>
          <p className="text-gray-600">Lihat semua transaksi laundry yang pernah Anda lakukan</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Berdasarkan Tanggal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Transaksi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>ID Transaksi</TableHead>
                    <TableHead>ID Pesanan</TableHead>
                    <TableHead>Paket</TableHead>
                    <TableHead>Berat</TableHead>
                    <TableHead>Total Pembayaran</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((trx) => (
                    <TableRow key={trx.id}>
                      <TableCell>{trx.date}</TableCell>
                      <TableCell>{trx.id}</TableCell>
                      <TableCell>{trx.orderId}</TableCell>
                      <TableCell>{trx.package}</TableCell>
                      <TableCell>{trx.weight} kg</TableCell>
                      <TableCell>Rp {trx.total.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            trx.paymentStatus === 'Lunas'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }
                        >
                          {trx.paymentStatus}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
