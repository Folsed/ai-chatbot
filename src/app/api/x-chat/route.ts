import { xai } from '@/lib/xai'
import { serverTimestamp } from '@firebase/firestore'

export async function POST(req: Request) {
    const { input, chatId, user } = await req.json()

    const res = await xai.chat.completions.create({
        model: 'grok-beta',
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant.',
            },
            {
                role: 'user',
                content: 'input',
            },
        ],
    })

    const response = res.choices[0].message.content

    const message: Message = {
        text: response || 'Luna was unable to find an answer for that!',
        createdAt: serverTimestamp(),
        user: {
            _id: 'askluna',
            name: 'AskLuna',
            avatar: '/sweetie-luna.jpg'
        },
    }
}
