import { Link } from "react-router-dom"
// import {
//   VerifyEmailForm,
//   ForgotPasswordForm,
//   ResetPasswordForm,
// } from 'wasp/client/auth'
import { useTheme } from "../../hooks/use-theme";
import { Card, CardContent } from "../../components/ui/card";

export function EmailVerification() {
    const { colors } = useTheme();
  
  return (
      <div className='flex items-center justify-center min-h-screen bg-primary-foreground'>
      <Card className='w-full max-w-md'>
        <CardContent>
      {/* <VerifyEmailForm appearance={{ colors }} /> */}
      <br />
      <span className="text-sm font-medium text-gray-900">
        If everything is okay, <Link to="/login">go to login</Link>
      </span>
      </CardContent>
      </Card>
    </div>
  )
}

export function RequestPasswordReset() {
  const { colors } = useTheme();

  return (
      <div className='flex items-center justify-center min-h-screen bg-primary-foreground'>
      <Card className='w-full max-w-md'>
        <CardContent>
      {/* <ForgotPasswordForm appearance={{ colors }} /> */}
      </CardContent>
      </Card>
    </div>
  )
}

export function PasswordReset() {
  const { colors } = useTheme();

  return (
      <div className='flex items-center justify-center min-h-screen bg-primary-foreground'>
      <Card className='w-full max-w-md'>
        <CardContent>
      {/* <ResetPasswordForm appearance={{ colors }} /> */}
      <br />
      <span className="text-sm font-medium text-gray-900">
        If everything is okay, <Link to="/login">go to login</Link>
      </span>
      </CardContent>
      </Card>
    </div>
  )
}