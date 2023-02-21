import { Message } from "@/typings";
import Image from "next/image";

type Props = {
  message: Message;
};

function MessageBubble({ message }: Props) {
  return (
    <div className="flex w-fit">
      <div className="flex-shrink-0">
        <Image
          className="rounded-full mx-2"
          height={10}
          width={50}
          src={message.avatar}
          alt="profile pic"
        />
      </div>

      <div>
        <p className="text-[0.65rem] px-[2px] pb-[2px] text-green-400">{message.username}</p>

        <div className="flex items-end">
          <div className="px-3 py-2 rounded-lg w-fit text-white bg-green-400">
            <p>{message.message}</p>
          </div>

          <p className="text-[0.65rem] italic px-3 text-gray-300">{new Date(message.created_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
