import Image from "next/image"
import { HiMenu } from "react-icons/hi";
const LoggedInHeader = () => {


  return (
    <header className="h-20 w-full  bg-gray-50 shadow-sm flex px-5  sm:px-10  items-center">
        <HiMenu className="w-10 h-10 flex sm:hidden " />
      <section className="hidden sm:flex relative w-14 h-14 rounded-full overflow-hidden  shadow-inner  ">
        <Image
          src={"/person.webp"}
          alt="user image"
          fill
          className="object-cover"
        />
      </section>
    </header>
  );
}

export default LoggedInHeader