import { Alert, AlertDescription } from '@/components/ui/alert';

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <Alert variant="default">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
