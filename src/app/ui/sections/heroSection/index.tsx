import BackgroundImage from "../../BackgroundImage";
import background from "../../../../../public/images/background-test.jpg";
import LeftSide from "./LeftSide";

const ImageProps = {
  src: "/images/background-test.jpg",
  alt: "Hero Image",
  width: 1000,
  height: 800,
};

export default function HeroSection() {
  return (
    <section className="h-screen">
      <BackgroundImage src={background}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <LeftSide />
          <div></div>
        </div>
      </BackgroundImage>
    </section>
  );
}
