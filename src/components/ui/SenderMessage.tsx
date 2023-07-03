"use client"

import React from 'react'

interface SenderMessage extends React.HTMLAttributes<HTMLParagraphElement> {
    message:string
}


const SenderMessage = ({ message, className,...props }: SenderMessage) => {
  return (
    <section className="w-full  flex items-center ">
      <p
        {...props}
        className={
          "px-5 p-1 max-w-[17rem] text-right bg-gray-200 border  text-gray-950 rounded-full"
        }
      >
        {message}
      </p>
    </section>
  );
};

export default SenderMessage