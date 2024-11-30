import { auth } from '@/lib/auth'
import Chatbox from './components/chat-box'
import { redirect } from 'next/navigation'

export default async function SingleChatPage() {
    const session = await auth()

    return (
        <>
            {session && session.user ? (
                <Chatbox session={session} />
            ) : (
                redirect('/')
            )}
        </>
    )
}
