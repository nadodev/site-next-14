import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './_components/theme-provider'

import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Meu Portfolio',
  description: 'Esse é meu porfolio, aqui você encontra meus trabalhos',
  keywords: [
    'portfolio', 'desenvolvimento', 'web', 'react', 'nextjs', 'typescript', 'javascript', 'css', 'html', 'frontend', 'backend', 'fullstack', 'developer', 'dev', 'programador', 'programação', 'web', 'site', 'aplicativo', 'app', 'mobile', 'responsivo', 'responsividade', 'design', 'ux', 'ui', 'ux/ui', 'uxui', 'ux/ui design', 'uxui design', 'ux design', 'ui design', 'ux designer', 'ui'
  ],
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
