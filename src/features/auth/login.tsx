import { LoginForm } from 'wasp/client/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { useTheme } from '../../hooks/use-theme';
import { Link } from 'react-router-dom';

export function Login() {
  const { colors } = useTheme();

  return (
    <div className='flex items-center justify-center min-h-screen bg-primary-foreground'>
      <Card className='w-full max-w-md'>
        <CardContent>
          <LoginForm
            appearance={{
              colors,
            }}
          />
          <br />
      <span className="text-sm font-medium">
        Don't have an account yet? <Link className='text-primary underline-offset-4 hover:underline' to="/sign-up">go to signup</Link>.
      </span>
      {/* <br />
      <span className="text-sm font-medium text-gray-900">
        Forgot your password? <Link className='text-primary underline-offset-4 hover:underline' to="/request-password-reset">reset it</Link>.
      </span> */}
        </CardContent>
      </Card>
    </div>
  );
}
