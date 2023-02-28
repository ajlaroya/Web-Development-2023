import { Inter } from "@next/font/google";
import { Message } from "@/typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { getServerSession } from "next-auth";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getMessages`).then(
  //   (res: Response) => res.json()
  // );

  // const messages: Message[] = data.messages;
  const messages: Message[] = []
  const session = await getServerSession();

  return (
    <Providers session={session}>
      <main className={inter.className}>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}
