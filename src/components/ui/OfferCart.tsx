import { getTimeDifference } from "@/lib/utils";
import Image from "next/image";
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineExclamationCircle, } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FiHeart, FiSend } from "react-icons/fi";
interface OfferCartProps {
    data:OfferCart
}


const OfferCart = ({data}: OfferCartProps) => {




const theDifference = getTimeDifference(data.createdAt.toDateString());



  return (
    <section className="w-full max-w-4xl md:aspect-[10/2.6] aspect-[16/9]  sm:aspect-[10/4]  bg-gray-50 drop-shadow-md flex flex-col">
      <main className="flex justify-between  p-5 sm:flex-row w-full flex-col flex-grow gap-5">
        <section className="flex flex-col gap-3">
          <div className="flex  items-center gap-3">
            <section className=" relative w-14 h-14 rounded-full overflow-hidden  shadow-inner  ">
              <Image
                src={"/person.webp"}
                alt="user image"
                fill
                className="object-cover"
              />
            </section>
            <section className="flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold">{data.userName}</h2>
              <div className="flex gap-2 items-center ">
                <AiOutlineClockCircle className="fill-gray-400" />
                <h3 className="text-sm text-gray-500">{theDifference}</h3>
              </div>
            </section>
          </div>
          <div className="flex items-center gap-5">
            <section className="flex justify-center gap-2 items-center">
              {data.trusted ? (
                <>
                  <AiOutlineCheckCircle className="fill-green-500" />
                  <h3>موثوق</h3>
                </>
              ) : (
                <>
                  <AiOutlineExclamationCircle className="fill-amber-500" />
                  <h3>غير موثوق</h3>
                </>
              )}
            </section>
            <section className="flex justify-center gap-2 items-center">
              <IoLocationOutline />
              <h3>{data.city}</h3>
            </section>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
        </section>
        <section className="flex h-full gap-10  justify-center ">
          <div className="flex flex-col gap-2 items-center">
            <h2>متوفر</h2>
            <section className="border border-gray-600 h-6 flex justify-center items-center gap-2 px-1">
              <div>{data.from.amount}</div>
              <div
                className="border-r px-1 border-gray-600"
                title={data.from.currency.name}
              >
                {data.from.currency.code}
              </div>
            </section>{" "}
            <section
              title={data.from.company.name}
              className="border relative w-14 h-14 rounded-full overflow-hidden  shadow-inner  "
            >
              <Image
                src={data.from.company.logo}
                alt="user image"
                fill
                className="object-cover"
              />
            </section>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h2>بسعر</h2>
            <section className="border border-gray-600 h-6 flex justify-center items-center gap-2 px-1">
              <div>{data.to.amount}</div>
              <div
                className="border-r px-1 border-gray-600"
                title={data.to.currency.name}
              >
                {data.to.currency.code}
              </div>
            </section>
            <section
              title={data.to.company.name}
              className="border relative w-14 h-14 rounded-full overflow-hidden  shadow-inner  "
            >
              <Image
                src={data.to.company.logo}
                alt="user image"
                fill
                className="object-cover"
              />
            </section>
          </div>
        </section>
      </main>
      <hr className="hidden sm:flex" />
      <footer className="select-none sm:h-12 h-16  w-full flex justify-between items-center sm:p-3 p-5">
        <section className="flex justify-center items-center gap-5">
          <div className="group flex hover:text-red-600  active:text-red-500 cursor-pointer justify-center items-center gap-2">
            <h4> {data.likes.length} </h4>
            <FiHeart className="group-active:fill-red-500 group-active:stroke-red-500" />
          </div>
          <div className="group hover:text-cyan-600  active:text-cyan-500 cursor-pointer flex justify-center items-center gap-2">
            <h4> {data.comments.length} </h4>
            <FiSend className="group-active:fill-cyan-500 group-active:stroke-cyan-500" />
          </div>
        </section>
        <button className="rounded-full bg-gray-900 text-gray-200 hover:text-gray-100 active:text-gray-50 active:bg-gray-800 p-2 px-14 flex justify-center items-center">
          احجز
        </button>
      </footer>
    </section>
  );
};

export default OfferCart