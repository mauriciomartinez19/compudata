import Slider from "../slider";
import { Email } from "./items/Email";
import { PhoneNumber } from "./items/PhoneNumber";
import { Location } from "./items/Location";
import { MobileNumber } from "./items/MobileNumber";

const ContactSlider = () => {
  return (
    <div className="w-screen">
      <Slider slideWidth="320px" slideGap="0px">
        <Email />
        <PhoneNumber />
        <Location />
        <MobileNumber/>
      </Slider>
    </div>
  );
};

export default ContactSlider;
