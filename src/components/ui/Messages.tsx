"use client"
import { getTimeDifference, scrollToSection } from "@/lib/utils";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ScrollArea } from "./scroll-area";
import { FiSend } from "react-icons/fi";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";
import Tooltip from "./ToolTip";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import Link from "next/link";
const Messages = ({ conversation }: { conversation: Conversation }) => {
  const lastMessage = conversation.messages.pop(); // this used to get the last message in the array
  const theDifference = getTimeDifference(
    lastMessage?.createdAt.toDateString()!
  );
  // this should be compared with not "احمد" , this should be compared with the user name from the session provider
  // ex : const senderName = messages.participants.filter(n=>n.name!==session.username)
  // this used to get the other part of the deal
  const senderData = conversation.participants.filter((n) => n.name !== "أحمد");

  return (
    <section className="lg:col-span-2 col-span-3 w-full bg-gray-50 drop-shadow-md h-full flex flex-col">
      <header className="w-full flex justify-between items-center border-b p-3 border-gray-300">
        <div className="flex  items-center gap-3">
          <section className=" relative w-14 h-14 rounded-full overflow-hidden  shadow-inner  ">
            <Image
              src={senderData[0].img}
              alt="user image"
              fill
              className="object-cover"
            />
          </section>
          <section className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold">{senderData[0].name}</h2>
            <div className="flex gap-2 items-center ">
              <AiOutlineClockCircle className="fill-gray-400" />
              <h3 className="text-sm text-gray-500">{theDifference}</h3>
            </div>
          </section>
        </div>
        <Tooltip direction="bottom" key={"باقي العروض"} name="باقي العروض">
          
            <HiOutlineBarsArrowDown onClick={()=>{
              scrollToSection("status");
            }} className="w-8 h-8 lg:hidden flex cursor-pointer " />
        </Tooltip>
      </header>
      <main className="h-96  border-b border-gray-300">
        <ScrollArea className="h-full w-full sm:p-5 p-2 font-normal shadow-inner ">
          <main className="flex flex-col gap-3">
            {conversation.messages.map((message) => {
              if (message.sender.name === "أحمد") {
                return (
                  <>
                    <SenderMessage key={message.id} message={message.message} />
                  </>
                );
              } else {
                return (
                  <>
                    <RecipientMessage
                      key={message.id}
                      message={message.message}
                    />
                  </>
                );
              }
            })}
          </main>
        </ScrollArea>
      </main>
      <footer className="p-3 flex items-center justify-between gap-3">
        <textarea
          placeholder="أكتب رسالتك هنا ..."
          className="resize-none  h-8 w-full bg-transparent placeholder:text-gray-500 focus:outline-none"
        />
        <button className="rounded-full h-8 text-sm bg-gray-900 text-gray-200 hover:text-gray-100 active:text-gray-50 active:bg-gray-800 p-1 px-3 flex justify-center items-center">
          <p>ارسل</p>
          <FiSend />
        </button>
      </footer>
    </section>
  );
};

export default Messages