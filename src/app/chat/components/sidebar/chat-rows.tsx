'use client'

import { Session } from 'next-auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from '@firebase/firestore'

import { db } from '@/lib/firebase'
import { ChatRow } from '@/components/chat-row'
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { ChatRow } from './chat-row'

export const ChatRows = ({ session }: { session: Session }) => {
    const user = session.user!

    const [chats] = useCollection(
        session &&
            query(
                collection(db, 'users', user.email!, 'chats'),
                orderBy('createdAt', 'desc')
            )
    )
    const chat = '1'

    return (
        <>
            {/* {chats?.docs.map((chat) => (
                
            ))} */}
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <ChatRow chatId={chat} user={user} />
                </SidebarMenuButton>
            </SidebarMenuItem>
        </>
    )
}
