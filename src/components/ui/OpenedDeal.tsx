import { getDateFormated } from "@/lib/utils";

const OpenedDeal = ({ deal }: { deal: DealDetails }) => {
   const dealDate = getDateFormated(deal.createdAt.toDateString());

 
 
    return (
      <section dir="rtl" className="p-3 flex flex-col gap-3">
        <header className="w-full flex justify-center items-center">
          الصفقة مفتوحة
        </header>
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
            الغاء
          </button>
          <button className="bg-slate-400 text-gray-800 hover:text-gray-600 hover:bg-gray-300 px-2 rounded-full p-1 text-sm">
            تبليغ
          </button>
        </footer>
      </section>
    );
};

export default OpenedDeal