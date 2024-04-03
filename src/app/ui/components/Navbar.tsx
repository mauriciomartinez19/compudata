"use client";
import Image from "next/image";
import { useState } from "react";

const LABELS = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHidden = isOpen ? "block" : "hidden";
  return (
    <nav className="fixed bg-white border-gray-200 dark:bg-slate-200/75 w-dvw">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/images/logo-compudata.png"
            className="h-8"
            alt="Compudata Logo"
            width={180}
            height={60}
          />
        </div>
        <button
          data-collapse-toggle="N-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isHidden} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100/85 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {LABELS.map((label, i) => (
              <Label key={i} label={label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Label = ({ label }: { label: string }) => {
  return (
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-black rounded hover:bg-gray-300 md:hover:bg-transparent md:p-0"
        aria-current="page"
      >
        {label}
      </a>
    </li>
  );
};
