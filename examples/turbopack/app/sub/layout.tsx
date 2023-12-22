import { Metadata } from 'next';
import '@/app/global.css';

export const metadata: Metadata = {
  title: 'sub page - Turbopack example | Vsion',
  // icons: [ '/favicon.ico' ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
