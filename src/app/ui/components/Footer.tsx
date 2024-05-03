import { SECTIONS } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="dark-violet-bg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
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
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Compudata
            </span> */}
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {SECTIONS.map(({ name, id, disabled }, i) => {
              return (
                <li key={i}>
                  <Link
                    href={`#${id}`}
                    className={`hover:underline me-4 md:me-6 ${
                      disabled && "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Compudata™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
