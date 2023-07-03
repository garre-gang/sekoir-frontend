import Deal from '@/components/ui/Deal';
import { FakeDeals } from '@/lib/fakeData';
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const page = () => {
  return (
    <main className="flex flex-col  w-full items-center gap-10 p-10">
     <header className='flex justify-center items-center gap-2'>
<input placeholder='ابحث ...' type="text" className='h-10 rounded-md shadow-inner border border-gray-300 focus:outline-none px-2 placeholder:text-gray-400' />
      <button className='flex justify-center items-center rounded-lg bg-gray-900 text-gray-50 p-2 h-9 w-9'>
<AiOutlineSearch className='w-7 h-7' /> 
      </button>
     </header>
      <main className="flex flex-col gap-5 overflow-x-auto lg:max-w-5xl xl:max-w-none md:max-w-2xl sm:max-w-xl max-w-xs pb-5">
        <section className=" w-[75rem] grid grid-cols-6 h-20 p-3">
          <section
            dir="rtl"
            className="flex justify-center items-center w-full p-3 text-gray-600"
          >
            البائع
          </section>

          <section
            dir="rtl"
            className="flex justify-center items-center w-full p-3 text-gray-600"
          >
            التوقيت
          </section>
          <section
            dir="rtl"
            className="flex  items-center w-full p-3 text-gray-600"
          >
            العملة المرسلة
          </section>
          <section
            dir="rtl"
            className="flex items-center w-full p-3 text-gray-600"
          >
            العملة المتحصل عليها
          </section>
          <section
            dir="rtl"
            className="flex justify-center items-center w-full p-3 text-gray-600"
          >
            الكمية
          </section>
          <section
            dir="rtl"
            className="flex justify-center items-center w-full p-3 text-gray-600"
          >
            الصفقة
          </section>
        </section>
        {FakeDeals.map((data) => {
          return data.deals.map((deal) => {
            return <Deal key={deal.id} data={deal} />;
          });
        })}
      </main>
    </main>
  );
}

export default page