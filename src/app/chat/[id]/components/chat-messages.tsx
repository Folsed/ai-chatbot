import { Session } from 'next-auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from '@firebase/firestore'

import { db } from '@/lib/firebase'
import Message from './message'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { useEffect, useRef } from 'react'

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

    return (
        <ScrollArea className='flex-1 p-4 py-24' ref={scrollRef}>
            {messages?.docs.map((message) => (
                <Message key={message.id} message={message.data()} />
            ))}
        </ScrollArea>
    )
}

export default ChatMessages
