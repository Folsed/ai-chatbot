import Image from 'next/image'
import {
    ClockIcon,
    ImagePlusIcon,
    MessageSquareIcon,
    ZapIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const cards = [
    {
        id: 1,
        icon: MessageSquareIcon,
        title: 'Natural Conversations',
        description:
            'Engage in human-like conversations with our advanced language model.',
    },
    {
        id: 2,
        icon: ZapIcon,
        title: 'Instant Responses',
        description:
            'Get immediate answers to your questions, no matter how complex.',
    },
    {
        id: 3,
        icon: ClockIcon,
        title: 'Real-Time Updates',
        description: 'Receive real-time updates, as you would in a live chat',
    },
    {
        id: 4,
        icon: ImagePlusIcon,
        title: 'Image Vision',
        description: 'Upload images to Ask-Luna and receive responses',
    },
]

export default function ChatPage() {
    return (
        <main className='flex-1'>
            <section className='flex w-full flex-col items-center justify-center py-6 md:py-12 lg:py-16 xl:py-24'>
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center space-y-4 text-center'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                                Welcome to Ask-Luna
                            </h1>
                            <p className='mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-lg'>
                                Ask-Luna is a chatbot that can answer any
                                question you have. Just type your question and
                                Ask-Luna will respond with an answer.
                            </p>
                        </div>

                        <div className='w-full max-w-sm space-y-2'>
                            <div className='relative mt-12 h-48 w-full rounded-lg border'>
                                <Image
                                    src='/luna-logo.png'
                                    alt='xAI Logo'
                                    fill
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    className='pointer-events-none aspect-square select-none rounded-lg object-contain invert dark:invert-0'
                                />
                                <div className='absolute bottom-0 left-0 right-0 rounded-b-lg bg-black/90 p-2 font-bold uppercase text-white'>
                                    Powered By
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex w-full items-center justify-center'>
                <div className='container px-4 md:px-6'>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        {cards.map((card) => (
                            <Card key={card.id}>
                                <CardHeader>
                                    <CardTitle className='flex items-center space-x-2'>
                                        <card.icon className='size-6' />
                                        <span>{card.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        {card.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
