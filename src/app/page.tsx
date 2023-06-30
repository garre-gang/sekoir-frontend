import OfferCart from "@/components/ui/OfferCart";
import { FakeOfferCarts } from "@/lib/fakeData";




export default function Home() {
  return (
    <main className="flex flex-col  w-full items-center gap-10 p-10">
  {FakeOfferCarts.map((offer)=>{
    return <OfferCart key={offer.id} data={offer} /> 
  })}
    </main>
  );
}
