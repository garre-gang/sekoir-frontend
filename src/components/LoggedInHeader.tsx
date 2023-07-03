import Image from "next/image"
import Link from "next/link";
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



{/* this nav bar just fro navigating in the pages in the dev mode */}
      <nav className="w-full flex justify-center items-center gap-10 px-10">
        <Link href={"/"} className="hover:bg-gray-300 rounded-md px-5 py-2">
          home
        </Link>

        <Link
          href={"/chats"}
          className="hover:bg-gray-300 rounded-md px-5 py-2"
        >
          chats
        </Link>
      </nav>
    </header>
  );
}

export default LoggedInHeader