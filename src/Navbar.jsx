import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "./context/StateContext";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <nav className="w-full p-2 border-b-2 border-black shadow-sm hidden md:block">
      <ul className="flex justify-center gap-3">
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/india">India</Link>
        </li>
        <span className="text-neutral-900">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/business">Business</Link>
        </li>
        <span className="text-neutral-900">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/sports">Sports</Link>
        </li>
        <span className="text-neutral-900">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/world">World</Link>
        </li>
        <span className="text-neutral-900">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/politics">Politics</Link>
        </li>
        <span className="text-neutral-900">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/technology">Technology</Link>
        </li>
        <span className="text-neutral-900">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <span className="text-neutral-900">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/science">Science</Link>
        </li>
      </ul>
    </nav>
  );
};

export default function Navbar() {
  const { openMenu, setOpenMenu } = useStateContext();
  return (
    <>
      <Nav />
      {openMenu && <MobileNav />}
    </>
  );
}
