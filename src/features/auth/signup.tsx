import { SignupForm } from 'wasp/client/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { useTheme } from '../../hooks/use-theme';
import { Link } from 'react-router-dom';

export function Signup() {
  const { colors } = useTheme();

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-foreground">
      <Card className="w-full max-w-md">
        <CardContent>
          <SignupForm
            appearance={{
              colors,
            }}
          />
          <br />
          <span className="text-sm font-medium">
            I already have an account?{' '}
            <Link
              className="text-primary underline-offset-4 hover:underline"
              to="/login"
            >
              go to login
            </Link>
            .
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
