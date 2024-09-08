import PageContainer from '@/components/layout/page-container';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { TransferForm } from '@/components/transfer-form';

const breadcrumbItems = [
  { title: 'Account', link: '/account' },
  { title: 'Transfer', link: '/dashboard/transfer' }
];
export default function Transfer() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <TransferForm />
      </div>
    </PageContainer>
  );
}
