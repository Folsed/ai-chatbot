import { SidebarProvider } from '@/components/ui/sidebar'
import Header from './components/Header'
import AppSidebar from './components/sidebar/AppSidebar'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider>
            <div className='flex h-screen w-full bg-background text-foreground'>
                <>
                    <AppSidebar />
                    <div className='flex flex-1 flex-col'>
                        <Header />
                        {children}
                    </div>
                </>
            </div>
        </SidebarProvider>
    )
}
