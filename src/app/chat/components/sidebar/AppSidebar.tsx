import { redirect } from 'next/navigation'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
// import { NewChat } from '@/components/new-chat'
// import { ChatRows } from '@/components/chat-rows'
// import { ProfileButton } from '@/components/profile-button'
import { auth } from '@/lib/auth'
import { NewChat } from './new-chat'
import { ChatRows } from './chat-rows'
import { ProfileButton } from './profile-button'
import { DialogTitle } from '@/components/ui/dialog'
import { SheetTitle } from '@/components/ui/sheet'

const AppSidebar = async () => {
    const session = await auth()

    if (!session) {
        redirect('/')
    }

    if (!session.user) {
        redirect('/')
    }

    const user = session.user

    return (
        <Sidebar>
            
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <NewChat user={user} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {/* <ChatRows session={session} /> */}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <ProfileButton user={user} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
