import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateContext } from "./context/StateContext";

export default function MobileNav() {
  const { setOpenMenu } = useStateContext();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
        },
      }}
      exit={{ y: -100 }}
      className="w-full p-2 border-b-2 border-black shadow-sm  md:hidden"
    >
      <ul className="py-5 flex flex-col  items-center  gap-5">
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/india" onClick={() => setOpenMenu(false)}>
            India
          </Link>
        </li>
        <span className="text-neutral-900 hidden md:block">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/business" onClick={() => setOpenMenu(false)}>
            Business
          </Link>
        </li>
        <span className="text-neutral-900 hidden md:block">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/sports" onClick={() => setOpenMenu(false)}>
            Sports
          </Link>
        </li>
        <span className="text-neutral-900 hidden md:block">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/world" onClick={() => setOpenMenu(false)}>
            World
          </Link>
        </li>
        <span className="text-neutral-900 hidden md:block">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/politics" onClick={() => setOpenMenu(false)}>
            Politics
          </Link>
        </li>
        <span className="text-neutral-900 hidden md:block">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/technology" onClick={() => setOpenMenu(false)}>
            Technology
          </Link>
        </li>
        <span className="text-neutral-900 hidden md:block">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/entertainment" onClick={() => setOpenMenu(false)}>
            Entertainment
          </Link>
        </li>
        <span className="text-neutral-900 hidden md:block">|</span>
        <li className=" text-neutral-900 hover:text-black hover:font-semibold">
          <Link to="/science" onClick={() => setOpenMenu(false)}>
            Science
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
