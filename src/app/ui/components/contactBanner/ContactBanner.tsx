import { Email } from "./items/Email";
import { PhoneNumber } from "./items/PhoneNumber";
import { Location } from "./items/Location";

const ContactBanner = () => {
  return (
    <div className="h-[var(--banner-height)] bg-[var(--nav-background)] px-5 w-screen justify-around flex">
      <Email />
      <PhoneNumber />
      <Location />
    </div>
  );
};

export default ContactBanner;
