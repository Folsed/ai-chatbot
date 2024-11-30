import {
    ClockIcon,
    ImagePlusIcon,
    MessageSquareIcon,
    ZapIcon
} from 'lucide-react'

const cards = [
    {
        id: 1,
        icon: MessageSquareIcon,
        title: 'Natural Conversations',
        description:
            'Engage in human-like conversations with our advanced language model.'
    },
    {
        id: 2,
        icon: ZapIcon,
        title: 'Instant Responses',
        description:
            'Get immediate answers to your questions, no matter how complex.'
    },
    {
        id: 3,
        icon: ClockIcon,
        title: 'Real-Time Updates',
        description: 'Receive real-time updates, as you would in a live chat'
    },
    {
        id: 4,
        icon: ImagePlusIcon,
        title: 'Image Vision',
        description: 'Upload images to Ask-GPT and receive responses'
    }
]

export default function ChatPage() {
    return (
        <main className='flex-1'>
            chat
        </main>
    )
}
