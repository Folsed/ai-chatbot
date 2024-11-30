import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
import Providers from '@/providers/Providers'

export const metadata: Metadata = {
    title: 'Ask-Luna',
    description: '',
}

const roboto = Roboto({
    weight: '400',
    subsets: ['vietnamese'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${roboto.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
