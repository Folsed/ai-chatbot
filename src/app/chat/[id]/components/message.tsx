import Image from 'next/image'
import Markdown from 'react-markdown'
import { DocumentData } from '@firebase/firestore'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Message = ({ message }: { message: DocumentData }) => {
    const isAIMessage = message.user._id === 'askluna'

    return (
        <div
            key={message.id}
            className={`mb-4 flex ${isAIMessage ? 'justify-start' : 'justify-end'}`}
        >
            <div
                className={`flex max-w-[80%] items-start ${
                    isAIMessage ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
                <Avatar className='size-8'>
                    <AvatarImage src={message.user.avatar} />
                    <AvatarFallback>
                        {`${message.user.name
                            ?.split(' ')
                            .map((name: string) => name[0])
                            .join('')}`}
                    </AvatarFallback>
                </Avatar>

                <div className='mx-2 space-y-2'>
                    {message.imageUrl && (
                        <div className='flex justify-end'>
                            <Image
                                src={message.imageUrl}
                                alt='Uploaded Image'
                                width={1000}
                                height={1000}
                                className='h-40 w-auto rounded-lg object-cover'
                            />
                        </div>
                    )}

                    <div
                        className={`rounded-lg p-3 ${
                            isAIMessage
                                ? 'bg-secondary'
                                : 'bg-primary text-primary-foreground'
                        }`}
                    >
                        <Markdown>{message.text}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
