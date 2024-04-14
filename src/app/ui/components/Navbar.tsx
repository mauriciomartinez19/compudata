"use client";
import { SECTIONS } from "@/app/lib/definitions";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHidden = isOpen ? "block" : "hidden";
  return (
    <nav className="fixed border-gray-200 w-dvw z-10 bg-white flex items-center">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-dvw">
        <div className="flex items-center">
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
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
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isHidden} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100/85 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {SECTIONS.map(({name, id}, i) => (
              <Label key={i} name={name} id={id} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface LabelProps {
  name: string;
  id: string;
}

const Label = ({ name, id }: LabelProps) => {
  return (
    <li>
      <a
        href={`#${id}`}
        className="font-bold block py-2 px-3 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:p-0"
        aria-current="page"
      >
        {name}
      </a>
    </li>
  );
};
