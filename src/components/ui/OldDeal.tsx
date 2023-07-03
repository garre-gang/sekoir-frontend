
const OldDeal = ({ deal }: { deal: DealDetails }) => {
  return (
    <section className="flex flex-col gap-1 w-full border border-gray-200 bg-gray-100  h-24 p-1">
      <header className="w-full flex text-red-600 ">
        {deal.status === "closed" ? "مغلقة" : "منتهية"}
      </header>
      <main dir="rtl" className="flex flex-col text-xs text-gray-600">
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
    </section>
  );
};

export default OldDeal