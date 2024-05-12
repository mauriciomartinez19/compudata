import { ComponentType } from "react";
import dynamic from 'next/dynamic'
import HeroSection  from "../ui/sections/heroSection";"../ui/sections/heroSection"

const AboutUs = dynamic(()=>import("../ui/sections/aboutUs"), {
  loading: ()=> <div>Loading...</div>
})
const Services = dynamic(()=>import("../ui/sections/services"), {
  loading: ()=> <div>Loading...</div>
})

const Contact = dynamic(()=>import("../ui/sections/contact"), {
  loading: ()=> <div>Loading...</div>
})

const BrandSlider = dynamic(()=>import("../ui/components/BrandSlider"), {
  loading: ()=> <div>Loading...</div>
})

const ContactBanner = dynamic(()=>import("../ui/components/contactBanner"), {
  loading: ()=> <div>Loading...</div>
})

interface Section {
  name: string;
  id: string;
  component: JSX.Element;
  isSplitter?: boolean;
  disabled?: boolean;
}

const createSection = (name: string, id: string, Component: ComponentType<{ id: string }>, isSplitter?: boolean, disabled?: boolean): Section => {
  return {
    name,
    id,
    component: <Component id={id} />,
    disabled,
    isSplitter
    }
  };

export const SECTIONS: Section[] = [
  createSection("Home", "home", HeroSection),
  createSection("Contact banner", "contact-banner", ContactBanner, true),
  createSection("Sobre Nosotros", "about", AboutUs),
  createSection("Servicios", "services", Services),
  createSection("Brand Slider", "brand-slider", BrandSlider, true),
  createSection("Contacto", "contact", Contact),
];