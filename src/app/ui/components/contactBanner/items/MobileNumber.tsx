import Link from "next/link";
import Image from "next/image";

export const MobileNumber = () => {
  return (
    <div className="flex gap-4 items-center w-80 justify-center">
      <Link
        target="_blank"
        href="https://wa.me/+59899624437"
        className="flex items-center"
      >
        <Image
          alt="wpp-logo"
          src="/images/whatsapp-logo.svg"
          height={29}
          width={29}
        />
      </Link>
      <a
        className="text-white no-underline flex items-center"
        target="_blank"
        href="tel:+59899624437"
      >
        099 634 437
      </a>
    </div>
  );
};