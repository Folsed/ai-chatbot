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
            <div className='flex flex-1 h-screen w-full bg-background text-foreground'>
                <>
                    <AppSidebar />
                    <div className='flex flex-1 flex-col relative'>
                        <Header />
                        {children}
                    </div>
                </>
            </div>
        </SidebarProvider>
    )
}
