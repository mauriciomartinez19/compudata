import Image, { StaticImageData } from "next/image";

const BackgroundImage = ({
  children,
  src
}: Readonly<{
  children: React.ReactNode;
  src: StaticImageData
}>) => {
  return (
    <div className="relative w-screen h-screen">
        <Image
          className="-z-10"
          alt="Mountains"
          src={src}
          // quality={80}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          priority={true}
        />
      {children}
    </div>
  );
};

export default BackgroundImage;
