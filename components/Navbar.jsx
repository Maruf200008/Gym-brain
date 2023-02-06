import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" w-full top-10 left-0 sm:px-20  sm:py-10">
      <div className="md:flex items-center justify-between md:bg-transparent bg-white shadow-lg md:shadow-none py-4 md:px-10 px-7 w-100%">
        <div className=" font-bold text-[16px] cursor-pointer flex items-center  text-indigo-600 ">
          <span className=" bg-indigo-600 mr-1 pt-2 rounded-md text-white px-2 py-1">
            Gym
          </span>
          baran
        </div>
        <div
          className=" text-3xl absolute right-8 top-6 z-[10] cursor-pointer md:hidden  "
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars text-gray-800"></i>
          )}
        </div>
        <ul
          className={`md:flex md:items-center font-['Poppins']  gap-8 md:pb-0 pb-12 absolute md:static  md:bg-transparent bg-white  md:z-auto z-[5] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-0 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          <li className="md:ml-10 text-[16px] md:my-0 my-7">
            <Link href="/"> Home</Link>
          </li>
          <li className="md:ml-8 text-[16px] md:my-0 my-7">
            <Link href="/"> Program</Link>
          </li>
          <li className="md:ml-8 text-[16px] md:my-0 my-7">
            <Link href="/"> Blog</Link>
          </li>
          <li className="md:ml-8 text-[16px] md:my-0 my-7">
            <Link href="/"> About us</Link>
          </li>
          <li className="md:ml-8 text-[18px] md:my-0 my-7">
            <Link href="/"> Program</Link>
          </li>
          <li className=" bg-indigo-600 md:w-auto w-[100px] text-center px-3 md:ml-10 py-2 rounded-md text-white">
            <button>Log in</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
