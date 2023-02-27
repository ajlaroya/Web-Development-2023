import type { NextApiRequest, NextApiResponse } from "next";
import redis from "@/redis";
import { Message } from "@/typings";
import { serverPusher } from "@/pusher";

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ body: "Method not allowed" });
    return;
  }

  const { message } = req.body;

  const newMessage = {
    ...message,

    // Replaces timestamp of client to server timestamp
    created_at: Date.now(),
  };

  // Push message to Upstash Redis db
  await redis.hset("messages", message.id, JSON.stringify(newMessage));
  
  // Pushes message to Pusher
  await serverPusher.trigger('messages', 'new-message', newMessage);

  res.status(200).json({ message: newMessage });
}
