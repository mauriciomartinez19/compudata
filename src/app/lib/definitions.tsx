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

interface Section {
  name: string;
  id: string;
  component: JSX.Element;
  disabled?: boolean;
}

const createSection = (name: string, id: string, Component: ComponentType<{ id: string }>, disabled?: boolean): Section => {
  return {
    name,
    id,
    component: <Component id={id} />,
    disabled
    }
  };

export const SECTIONS: Section[] = [
  createSection("Home", "home", HeroSection),
  createSection("Sobre Nosotros", "about", AboutUs),
  createSection("Servicios", "services", Services), 
  createSection("Contacto", "contact", Contact),
];