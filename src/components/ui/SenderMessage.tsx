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
          "sm:px-5 px-4 p-2 sm:max-w-[17rem] sm:text-base text-sm max-w-[12rem] text-right bg-gray-200 border  text-gray-950 rounded-full"
        }
      >
        {message}
      </p>
    </section>
  );
};

export default SenderMessage