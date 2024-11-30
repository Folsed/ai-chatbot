import Link from 'next/link'

import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from '@/components/theme-toggle'

const Header = () => {
    return (
        <header className='fixed w-full z-10 flex items-center justify-between border-b bg-background p-4'>
            <SidebarTrigger className='mr-4' />
            <Link href='/chat'>
                <h1 className='text-xl font-bold'>Ask-Luna</h1>
            </Link>
            <ThemeToggle />
        </header>
    )
}

export default Header
