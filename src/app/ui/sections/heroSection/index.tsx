import BackgroundImage from "../../components/BackgroundImage";
import background from "../../../../../public/images/background-test.jpg";
import LeftSide from "./LeftSide";

export default function HeroSection({ id }: { id: string }) {
  return (
    <section className="h-screen" id={id}>
      <BackgroundImage src={background}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <LeftSide />
          <div></div>
        </div>
      </BackgroundImage>
    </section>
  );
}
