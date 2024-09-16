import PageContainer from '@/components/layout/page-container';
import { Withdraw } from '@/components/withdraw';
import { Breadcrumbs } from '@/components/breadcrumbs';
import React from 'react';

const breadcrumbItems = [
  { title: 'Account', link: '/account' },
  { title: 'Withdrawal', link: '/dashboard/withdrawal' }
];
function Withdrawal() {
  return (
    <PageContainer>
      <div className="space-y-4 p-2">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <Withdraw />
    </PageContainer>
  );
}

export default Withdrawal;
