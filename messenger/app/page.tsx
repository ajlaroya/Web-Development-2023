import { Inter } from '@next/font/google'
import { Message } from '@/typings'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then((res: Response) => res.json())

  const messages: Message[] = data.messages

  return (
    <main className={inter.className}>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  )
}
