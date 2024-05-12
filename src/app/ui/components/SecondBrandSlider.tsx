import Slider from "./slider";
import Image from "next/image";

const BrandSlider = ({}:{id: string}) => {
  return (
    <Slider slideWidth="180px" slideGap="40px">
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/amd.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/ibm.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/havit.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/dell.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/nvidia.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/kingston.png"
      />
    </Slider>
  );
};

export default BrandSlider;
