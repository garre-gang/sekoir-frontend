import InProgressDeal from "./InProgressDeal";
import OldDeal from "./OldDeal";
import OpenedDeal from "./OpenedDeal";
import { ScrollArea } from "./scroll-area";

const RequestStatus = ({ deals }: { deals: DealDetails[] }) => {
  return (
    <section className="bg-gray-50 border border-gray-300  flex-col ">
      <ScrollArea className="h-full w-full">
        <header className="p-3">
          {deals.length < 0 ? (
            <div className="w-full flex justify-center items-center text-xl border-b p-3 text-gray-700">
              لا يوجد اي صفقة مفتوحة
            </div>
          ) : (
            deals.map((deal) => {
              if (deal.status === "opened") {
                return (
                  <OpenedDeal
                    key={deal.id}
                    deal={deal}
                  />
                );
              } else if (deal.status === "in progress") {
                return (
                  <InProgressDeal
                    key={deal.id}
                   deal={deal}
                  />

                );
              } else {
                return (
                  <div
                    key={deal.id}
                    className="w-full flex justify-center items-center text-xl border-b p-3 text-gray-700"
                  >
                    لا يوجد اي صفقة مفتوحة
                  </div>
                );
              }
            })
          )}
        </header>
        <main className="p-3 flex flex-col gap-5">
          <div className="w-full flex justify-center items-center text-xl border-b p-3 text-gray-700">
            الصفقات القديمة
          </div>
          {deals.map((deal) => {
            if (deal.status === "closed" || deal.status === "finished") {
              return <OldDeal deal={deal} key={deal.id} />;
            }
          })}
        </main>
      </ScrollArea>
    </section>
  );
};

export default RequestStatus