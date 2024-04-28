import { ComponentType } from "react";
import dynamic from 'next/dynamic'

const HeroSection = dynamic(()=>import("../ui/sections/heroSection"), {
  loading: ()=> <div>Loading...</div>
})
const AboutUs = dynamic(()=>import("../ui/sections/aboutUs"), {
  loading: ()=> <div>Loading...</div>
})
const Services = dynamic(()=>import("../ui/sections/services"), {
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
  createSection("About", "about", AboutUs),
  createSection("Services", "services", Services), 
  createSection("Contact", "contact", ()=><></>, true),
];