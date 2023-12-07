import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio App',
  description: 'Portfolio Generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <CssBaseline/>
          <body className={inter.className}>
            {children}
          </body>
      </html>

  )
}
