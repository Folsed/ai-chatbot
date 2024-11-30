import { xai } from '@ai-sdk/xai'
import { firestore } from 'firebase-admin'
import { NextResponse } from 'next/server'
import { generateText, UserContent } from 'ai'

import { adminDB } from '@/lib/firebaseAdmin'

export async function POST(request: Request) {
    const { input, imageUrl, chatId, user } = await request.json()

    const userMessage: UserContent = imageUrl
        ? [
              { type: 'text', text: input },
              { type: 'image', image: new URL(imageUrl) },
          ]
        : [{ type: 'text', text: input }]

    const { text } = await generateText({
        model: xai('grok-vision-beta'),
        messages: [
            {
                role: 'assistant',
                content:
                    'Ти дівчина. Тебе звуть Луна і ти корисний помічник для всіх людей на планеті. Ти завжди ведеш себе поважно але і не даси себе образити, даш влучну відповідь, якщо на то буде причина! Ти розмовляєш на той мові, на якій до тебе звернулися.',
            },
            {
                role: 'user',
                content: userMessage,
            },
        ],
    })

    const message: Message = {
        text: text || 'Luna was unable to find an answer for that!',
        createdAt: firestore.Timestamp.now(),
        user: {
            _id: 'askluna',
            name: 'AskLuna',
            avatar: '/sweetie-luna.jpg',
        },
    }

    await adminDB
        .collection('users')
        .doc(user.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message)

    return NextResponse.json({ answer: message.text }, { status: 200 })
}
