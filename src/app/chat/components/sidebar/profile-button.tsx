import { User } from 'next-auth'

import { SidebarMenuButton } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { signOut } from '@/lib/auth'

export const ProfileButton = ({ user }: { user: User }) => {
    const handleSignOut = async () => {
        'use server'
        await signOut({ redirectTo: '/' })
    }

    return (
        <form action={handleSignOut}>
            <SidebarMenuButton size='lg' type='submit'>
                <Avatar className='size-8'>
                    <AvatarImage
                        src={user.image || 'https://github.com/shadcn.png'}
                    />
                    <AvatarFallback>
                        {user.name
                            ?.split(' ')
                            .map((name) => name[0])
                            .join('')}
                    </AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-semibold'>{user.name}</span>
                    <span className='truncate text-xs'>{user.email}</span>
                </div>
            </SidebarMenuButton>
        </form>
    )
}
