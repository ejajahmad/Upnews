import React from "react";
import { TbMenu } from "react-icons/tb";
import { useStateContext } from "./context/StateContext";

export default function Header() {
  const { openMenu, setOpenMenu } = useStateContext();

  return (
    <div>
      <header className="w-full bg-black text-white  p-4  px-10 flex items-center justify-between md:justify-center">
        <p className="text-xl font-bold flex items-center justify-center">
          Upnews <span className="hidden lg:block"> - The latest news from around the globe</span>
        </p>
        <div className="flex md:hidden justify-end">
          <TbMenu className=" hover:text-gray-200 cursor-pointer" onClick={() => setOpenMenu(!openMenu)} />
        </div>
      </header>
    </div>
  );
}
