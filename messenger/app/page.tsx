import { Inter } from '@next/font/google'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <MessageList />
      <ChatInput />
    </main>
  )
}
