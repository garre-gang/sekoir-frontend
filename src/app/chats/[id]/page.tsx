import Messages from '@/components/ui/Messages';
import RequestStatus from '@/components/ui/RequestStatus';
import { FakeDeals } from '@/lib/fakeData';
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {

// replace this filter function with get Deal by id from the API endpoint
const thisDeal = FakeDeals.filter((e)=>e.id === params.id); 



  return (
    <main className="max-w-7xl grid grid-cols-3  w-full gap-10 p-10">
      <Messages conversation={thisDeal[0].conversation} />
      <RequestStatus deals={thisDeal[0].deals} />
    </main>
  );

};

export default page