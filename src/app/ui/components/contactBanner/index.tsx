import ContactBanner from "./ContactBanner";
import ContactSlider from "./ContactSlider";

const Banner = ({}: { id: string }) => {
  return (
    <>
      <div className="hidden md:flex">
        <ContactBanner />
      </div>
      <div className="flex md:hidden">
        <ContactSlider />
      </div>
    </>
  );
};

export default Banner;
