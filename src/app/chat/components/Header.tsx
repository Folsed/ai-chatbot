import Link from 'next/link'

import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from '@/components/theme-toggle'

const Header = () => {
    return (
        <header className='bg-background border-b p-4 flex items-center justify-between'>
            <SidebarTrigger className='block mr-4' />
            <Link href='/chat'>
                <h1 className='text-xl font-bold'>LunaAI</h1>
            </Link>
            <ThemeToggle />
        </header>
    )
}

export default Header
