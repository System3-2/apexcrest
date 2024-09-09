import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentTransactions(data: any) {
  return (
    <div className="space-y-8">
      {data.data.map((items: any) => {
        console.log({ items });
        const { firstName, lastName, email } = items.receiver;
        return (
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>
                {firstName[0]}
                {lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {firstName} {lastName}
              </p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
            <div className="ml-auto font-medium">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(items.amount)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
