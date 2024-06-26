import { SECTIONS } from "@/app/lib/definitions";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed border-gray-200 w-dvw z-10 flex items-center scroll-down">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-dvw">
        <div
          className="flex items-center"
          style={{ height: "60px", width: "180px", position: "relative" }}
        >
          <Image
            src="/images/logo-compudata.png"
            className="h-8"
            alt="Compudata Logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="180px"
          />
        </div>
        <div className="hidden md:block">
          <Sections />
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;

const Sections = () => {
  return (
    <ul className="font-medium flex flex-col p-4 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:p-0">
      {SECTIONS.map(({ name, id, disabled, isSplitter }, i) => {
        if (isSplitter) return null;
        return <Label key={i} name={name} id={id} disabled={disabled} />;
      })}
    </ul>
  );
};

const Dropdown = () => {
  return (
    <div className="custom-dropdown md:hidden">
      <button
        data-collapse-toggle="N-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg"
        aria-label="dropdown"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div className="w-full block w-auto custom-dropdown-content rounded-lg border border-gray-100">
        <Sections />
      </div>
    </div>
  );
};

interface LabelProps {
  name: string;
  id: string;
  disabled?: boolean;
}

const Label = ({ name, id, disabled }: LabelProps) => {
  return (
    <li>
      <a
        href={`#${id}`}
        className={`font-bold block py-2 px-3 text-white rounded md:hover:bg-transparent md:p-0 ${
          disabled && "opacity-50 cursor-not-allowed"
        }`}
        aria-current="page"
      >
        {name}
      </a>
    </li>
  );
};
