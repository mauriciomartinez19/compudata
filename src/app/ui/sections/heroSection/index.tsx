import BackgroundImage from "../../components/BackgroundImage";
import background from "../../../../../public/images/purple-background.jpg";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


export default function HeroSection({ id }: { id: string }) {
  return (
    <section className="md:min-h-lvh" id={id}>
      <BackgroundImage src={background}>
        <div className="md:grid md:grid-cols-2 md:gap-4 h-full">
          <LeftSide />
          <RightSide/>
        </div>
      </BackgroundImage>
    </section>
  );
}
