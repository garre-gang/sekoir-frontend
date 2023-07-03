"use client";
import React from "react";

interface RecipientMessage extends React.HTMLAttributes<HTMLParagraphElement> {
  message: string;
}

const RecipientMessage = ({
  message,
  className,
  ...props
}: RecipientMessage) => {
  return (
    <section className="w-full  flex items-center justify-end">
      <p
        {...props}
        className={
          " sm:px-5 px-4 p-2 sm:max-w-[17rem] sm:text-base text-sm max-w-[12rem] text-right bg-gray-900 text-gray-50 rounded-full"
        }
      >
        {message}
      </p>
    </section>
  );
};

export default RecipientMessage

