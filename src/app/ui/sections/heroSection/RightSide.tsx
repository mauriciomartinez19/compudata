import Image from "next/image";

const RightSide = () => {
  return (
    <div className="hidden md:h-svh md:flex md:justify-center md:items-end md:p-24 fall">
      <Image
        className="fade-out"
        src="/images/macbook.webp"
        alt="Macbook"
        width={400}
        height={200}
      />
    </div>
  );
};

export default RightSide