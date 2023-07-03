"use client"
import { getDateFormated } from "@/lib/utils";
import RatingStars from './RatingStars';
import { useState } from "react";

const InProgressDeal = ({ deal }: { deal: DealDetails }) => {
       const dealDate = getDateFormated(deal.createdAt.toDateString());

       const [stars, setStars] = useState(3)
  return (
    <section dir="rtl" className="p-3 flex flex-col gap-3">
      <header className="w-full flex justify-center items-center">
        الصفقة مفتوحة
      </header>

      <section className="flex flex-col gap-3 w-full p-3">
        <RatingStars rating={stars} totalStars={5} onStarClick={setStars} />
        <textarea placeholder="اكتب تقييمك هنا ..." className="bg-gray-200 border border-gray-300 resize-none focus:outline-none p-1 placeholder:text-gray-500"  />
      <section className="w-full flex justify-center items-center">

        <button className="bg-lime-500 hover:bg-lime-600 px-10 text-gray-50  p-1 flex justify-center items-center rounded-full text-sm w-2/3">ارسال</button>
      </section>
      </section>

      <main className="flex flex-col gap-2  text-xs text-gray-600 ">
        <div>{dealDate}</div>
        <section className="flex items-center gap-2">
          <div>العملة المرسلة :</div>
          <div className="flex justify-center items-center gap-1">
            <div>{deal.from.currency.code}</div>
            <div>{deal.from.company.name}</div>
          </div>
        </section>
        <section className="flex items-center gap-2">
          <div>العملة المتحصل عليها :</div>
          <div className="flex justify-center items-center gap-1">
            <div>{deal.to.currency.code}</div>
            <div>{deal.to.company.name}</div>
          </div>
        </section>
        <section className="flex items-center gap-2">
          <div>الكمية :</div>
          <div className="flex justify-center items-center gap-1">
            <div>{deal.from.amount}</div>
            <div>{deal.from.currency.code}</div>
          </div>
          <div>|</div>
          <div className="flex justify-center items-center gap-1">
            <div>{deal.to.amount}</div>
            <div>{deal.to.currency.code}</div>
          </div>
        </section>
      </main>
      <footer className="flex items-center gap-3">
        <button className="bg-slate-400 text-gray-800 hover:text-gray-600 hover:bg-gray-300 px-2 rounded-full p-1 text-sm">
          تبليغ
        </button>
      </footer>
    </section>
  );
};

export default InProgressDeal