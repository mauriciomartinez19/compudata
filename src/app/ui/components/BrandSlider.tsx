import Slider from "./slider";
import Image from "next/image";

const BrandSlider = () => {
  return (
    <Slider>
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/acer.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/asrock.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/canon.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/epson.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/logitech.png"
      />
      <Image
        alt="logo-brands"
        fill
        style={{ objectFit: "contain" }}
        sizes="300px"
        src="/images/brands/msi.png"
      />
    </Slider>
  );
};

export default BrandSlider;
