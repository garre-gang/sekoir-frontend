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
          " px-5 p-1 max-w-[17rem] text-right bg-gray-900 text-gray-50 rounded-full"
        }
      >
        {message}
      </p>
    </section>
  );
};

export default RecipientMessage

