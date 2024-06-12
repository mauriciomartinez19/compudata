import Image from "next/image";

const RightSide = () => {
  return (
    <div className="hidden md:h-svh md:flex md:justify-center md:items-center md:p-24 fall">
      <Image
        className="fade-out"
        src="/images/pc-repair.png"
        alt="Macbook"
        width={450}
        height={450}
      />
    </div>
  );
};

export default RightSide