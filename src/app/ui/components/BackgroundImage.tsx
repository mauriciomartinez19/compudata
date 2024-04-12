import Image, { StaticImageData } from "next/image";

const BackgroundImage = ({
  children,
  src
}: Readonly<{
  children: React.ReactNode;
  src: StaticImageData
}>) => {
  return (
    <div>
        <Image
          className="-z-10"
          alt="Mountains"
          src={src}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      {children}
    </div>
  );
};

export default BackgroundImage;
