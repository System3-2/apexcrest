'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Pagination } from '@/components/ui/pagination';
export function TransactionsTable() {
  const [transactions] = useState([
    {
      id: 'TX001',
      date: '2023-04-15',
      amount: 250.0,
      status: 'Completed',
      method: 'Credit Card'
    },
    {
      id: 'TX002',
      date: '2023-04-12',
      amount: 150.0,
      status: 'Pending',
      method: 'PayPal'
    },
    {
      id: 'TX003',
      date: '2023-04-10',
      amount: 350.0,
      status: 'Refunded',
      method: 'Bank Transfer'
    },
    {
      id: 'TX004',
      date: '2023-04-08',
      amount: 450.0,
      status: 'Completed',
      method: 'Credit Card'
    },
    {
      id: 'TX005',
      date: '2023-04-05',
      amount: 550.0,
      status: 'Completed',
      method: 'PayPal'
    }
  ]);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [currentPage] = useState(1);
  const filteredTransactions = useMemo(() => {
    return transactions.filter(
      (tx) =>
        tx.id.toLowerCase().includes(search.toLowerCase()) ||
        tx.date.toLowerCase().includes(search.toLowerCase()) ||
        tx.amount.toString().includes(search) ||
        tx.status.toLowerCase().includes(search.toLowerCase()) ||
        tx.method.toLowerCase().includes(search.toLowerCase())
    );
  }, [transactions, search]);
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Transactions History</h1>
          <Button variant="outline" onClick={() => setIsReceiptModalOpen(true)}>
            <DownloadIcon className="mr-2 h-5 w-5" />
            Download History
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => setSortKey('date')}
                >
                  Date
                  {sortKey === 'date' && (
                    <span className="ml-1">
                      {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => setSortKey('amount')}
                >
                  Amount
                  {sortKey === 'amount' && (
                    <span className="ml-1">
                      {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => setSortKey('status')}
                >
                  Name
                  {sortKey === 'status' && (
                    <span className="ml-1">
                      {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => setSortKey('method')}
                >
                  Payment Method
                  {sortKey === 'method' && (
                    <span className="ml-1">
                      {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                    </span>
                  )}
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>${tx.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        tx.status === 'Completed' ? 'secondary' : 'outline'
                      }
                    >
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{tx.method}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Receipt
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-center gap-2">
            <Pagination />
          </div>
        </div>
        <Dialog open={isReceiptModalOpen} onOpenChange={setIsReceiptModalOpen}>
          <DialogContent className="w-full max-w-3xl">
            <DialogHeader>
              <DialogTitle>Transaction Receipt</DialogTitle>
              <DialogDescription>
                View and search your transaction history.
              </DialogDescription>
            </DialogHeader>
            <div className="px-6 py-4">
              <div className="mb-4 flex items-center justify-between">
                <Input
                  placeholder="Search transactions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full max-w-md"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ListOrderedIcon className="mr-2 h-4 w-4" />
                      Sort by: {sortKey}{' '}
                      {sortOrder === 'asc' ? '\u2191' : '\u2193'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuRadioGroup
                      value={sortKey}
                      onValueChange={setSortKey}
                    >
                      <DropdownMenuRadioItem value="date">
                        Date
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="amount">
                        Amount
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="status">
                        Status
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="method">
                        Payment Method
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={sortOrder}
                      onValueChange={setSortOrder}
                    >
                      <DropdownMenuRadioItem value="asc">
                        Ascending
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="desc">
                        Descending
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment Method</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTransactions.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell>{tx.date}</TableCell>
                        <TableCell>${tx.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              tx.status === 'Completed'
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {tx.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{tx.method}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <DialogFooter>
              <div>
                <Button variant="outline">Close</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

function DownloadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function ListOrderedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}
