
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from './components/AppSidebar'
import Header from './components/Header'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider>
            <div className='flex h-screen bg-background text-foreground w-full'>
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
