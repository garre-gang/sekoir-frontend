import { getDateFormated, getTimeDifference } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";

const Deal = ({ data }: { data: DealDetails }) => {
  const dealDate = getDateFormated(data.createdAt.toDateString());
  const theDifference = getTimeDifference(data.createdAt.toDateString());

  // this should be compared with not "احمد" , this should be compared with the user name from the session provider
  // ex : const senderName = data.between.filter(n=>n!==session.username)
  // this used to get the other part of the deal 
  const senderName = data.between.filter((n) => n !== "أحمد");

  return (
    <Link href={`/chats/${data.id}`} className=" w-[75rem] border hover:border-gray-400 duration-75 transition-all grid grid-cols-6 h-20  bg-gray-50 drop-shadow-sm p-3">
      <section className="flex  items-center gap-3">
        <section className=" relative w-14 h-14 rounded-full overflow-hidden  shadow-inner  ">
          <Image
            src={"/person.webp"}
            alt="user image"
            fill
            className="object-cover"
          />
        </section>
        <h2 className="text-lg font-bold">{senderName}</h2>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold">{dealDate}</h2>
        <div className="flex gap-2 items-center ">
          <AiOutlineClockCircle className="fill-gray-400" />
          <h3 className="text-sm text-gray-500">{theDifference}</h3>
        </div>
      </section>

      <section className="flex  items-center gap-3">
        <div className="gap-2 flex justify-center items-center ">
          <h5 className="flex justify-center items-center">
            {data.from.company.name}
          </h5>
          <h5 className="flex justify-center items-center">
            {data.from.currency.code}
          </h5>
        </div>
        <section className=" relative w-10 h-10 rounded-full overflow-hidden  shadow-inner  ">
          <Image
            src={data.from.company.logo}
            alt="user image"
            fill
            className="object-cover"
          />
        </section>
      </section>

      <section className="flex  items-center gap-3">
        <div className="gap-2 flex justify-center items-center ">
          <h5 className="flex justify-center items-center">
            {data.to.company.name}
          </h5>
          <h5 className="flex justify-center items-center">
            {data.to.currency.code}
          </h5>
        </div>
        <section className=" relative w-10 h-10 rounded-full overflow-hidden  shadow-inner  ">
          <Image
            src={data.to.company.logo}
            alt="user image"
            fill
            className="object-cover"
          />
        </section>
      </section>

      <section className="flex items-center justify-center gap-1 text-gray-600">
        <div className="gap-1 flex justify-center items-center ">
          <h5 className="flex justify-center items-center">{data.to.amount}</h5>
          <h5 className="flex justify-center items-center">
            {data.to.currency.code}
          </h5>
        </div>
        <h5>|</h5>
        <div className="gap-1 flex justify-center items-center ">
          <h5 className="flex justify-center items-center">
            {data.from.amount}
          </h5>
          <h5 className="flex justify-center items-center">
            {data.from.currency.code}
          </h5>
        </div>{" "}
      </section>

      <section className="flex justify-center items-center">
        {data.status === "opened" ? (
          <h5 className="text-yellow-600">مفتوحة</h5>
        ) : data.status === "in progress" ? (
          <h5 className="text-green-500">طور الانجاز</h5>
        ) : data.status === "finished" ? (
          <h5>منتهية</h5>
        ) : (
          <h5 className="text-red-500">مغلقة</h5>
        )}
      </section>
    </Link>
  );
};

export default Deal