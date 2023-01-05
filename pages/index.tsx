import { AuthProvider } from 'contexts/auth/auth.context';
import LoginController from 'pages/Login/LoginController';

export default function Home() {
  return (
    <AuthProvider>
      <LoginController/>
    </AuthProvider>
  )
}
