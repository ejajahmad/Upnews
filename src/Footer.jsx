import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <motion.footer
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
      className="w-full bg-black text-white  p-4  px-10 flex items-center justify-center gap-2 fixed bottom-0 left-0 "
    >
      <p className=" flex items-center justify-center gap-2">
        Developed by <span className="font-semibold">Ejaj Ahmad</span>
      </p>
      <div className="flex items-center gap-3">
        <a href="https://www.github.com/ejajahmad/" className="text-gray-200 hover:text-white">
          <AiFillGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/ejajahmad/" className="text-gray-200 hover:text-white">
          <AiFillLinkedin size={20} />
        </a>
      </div>
    </motion.footer>
  );
}
