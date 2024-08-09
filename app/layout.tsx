import React from 'react'
import type { Metadata } from 'next'
import { Outfit, Pixelify_Sans, Noto_Sans_Tagalog } from 'next/font/google'
import './globals.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { Layout } from '@/src/dom/Layout'

const outfit = Outfit({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const pixelify_sans = Pixelify_Sans({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pixel',
})

const noto_sans_tagalog = Noto_Sans_Tagalog({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tagalog',
})

export const metadata: Metadata = {
  title: 'Rodener Dajes Web Dev',
  description: 'A Lazy Developer But Cute',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${pixelify_sans.variable} ${noto_sans_tagalog.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
