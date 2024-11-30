import { adminDB } from '@/lib/firebaseAdmin'
import { xai } from '@/lib/xai'
import { firestore } from 'firebase-admin'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { input, chatId, user } = await req.json()

    const res = await xai.chat.completions.create({
        model: 'grok-beta',
        messages: [
            {
                role: 'system',
                content: 'Тебе звуть Луна і ти корисний помічник для всіх людей на планеті. Ти завжди ведеш себе поважно але і не даси себе образити, даш влучну відповідь, якщо на то буде причина! Ти розмовляєш на той мові, на якій до тебе звернулися.'
            },
            {
                role: 'user',
                content: input,
            },
        ],
    })

    const response = res.choices[0].message.content

    const message: Message = {
        text: response || 'Luna was unable to find an answer for that!',
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

    return NextResponse.json({ answer: message.text, status: 200 })
}
