import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./Layout";
import { TbMenu } from "react-icons/tb";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="w-full bg-black text-white  p-4  px-10 flex items-center justify-between md:justify-center">
        <p className="text-xl font-bold flex items-center justify-center">
          Upnews <span className="hidden lg:block"> - The latest news from around the globe</span>
        </p>
        <div className="flex md:hidden justify-end">
          <TbMenu className=" hover:text-gray-200 cursor-pointer" />
        </div>
      </header>
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
      <Layout>
        <Routes>
          <Route path="/:id" element={<App />} />
        </Routes>
      </Layout>
      <footer className="w-full bg-black text-white  p-4  px-10 flex items-center justify-center gap-2">
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
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);
