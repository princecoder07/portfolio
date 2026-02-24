import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prince Kumar | Data Analyst Portfolio',
  description: 'Data Analyst with expertise in SQL, Python, Power BI, and Tableau. Transforming data into insights.',
  keywords: 'Data Analyst, SQL, Python, Power BI, Tableau, Data Science, Prince Kumar',
  authors: [{ name: 'Prince Kumar' }],
  openGraph: {
    title: 'Prince Kumar | Data Analyst Portfolio',
    description: 'Data Analyst with expertise in SQL, Python, Power BI, and Tableau',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} h-full`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
