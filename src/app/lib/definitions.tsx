import AboutUs from "../ui/sections/aboutUs";
import HeroSection from "../ui/sections/heroSection";
import Services from "../ui/sections/services";

interface Section {
  name: string;
  id: string;
  component: JSX.Element;
}

const createSection = (name: string, id: string, Component: React.FC<{ id: string }>): Section => {
  return {
    name,
    id,
    component: <Component id={id} />
    }
  };

export const SECTIONS: Section[] = [
  createSection("Home", "home", HeroSection),
  createSection("About", "about", AboutUs),
  createSection("Services", "services", Services), 
  createSection("Contact", "contact", ()=><></>),
];