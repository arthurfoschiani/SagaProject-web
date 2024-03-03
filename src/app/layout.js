import { AuthProvider } from '@/context/AuthContext'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { montserrat } from './fonts';

export const metadata = {
  title: 'SagaProject',
  description: 'Stream TV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>
          {children}
          <Toaster position='bottom-right' />
        </AuthProvider>
      </body>
    </html>
  )
}
