import { Session } from 'next-auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from '@firebase/firestore'

import { db } from '@/lib/firebase'
import Message from './message'
import { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

const ChatMessages = ({
    chatId,
    session,
}: {
    chatId: string
    session: Session
}) => {
    const user = session.user!
    const scrollRef = useRef<HTMLDivElement>(null)

    const [messages] = useCollection(
        session &&
            query(
                collection(
                    db,
                    'users',
                    user.email!,
                    'chats',
                    chatId,
                    'messages'
                ),
                orderBy('createdAt')
            )
    )

    console.log(scrollRef)

    useEffect(() => {
        scrollRef.current.scrollIntoView(false)
    }, [messages])
    console.log(scrollRef)

    return (
        <ScrollArea className='flex-1'>
            <div className='flex h-full flex-1 flex-col p-4' ref={scrollRef}>
                {messages?.docs.map((message) => (
                    <Message key={message.id} message={message.data()} />
                ))}
            </div>
        </ScrollArea>
    )
}

export default ChatMessages
