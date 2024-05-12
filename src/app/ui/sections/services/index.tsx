import Image from "next/image";
import Card from "../../components/Card";
import BrandSlider from "../../components/BrandSlider";

const CARDS = [
  {
    background: "card-background-one",
    title: "Video Vigilancia",
    description:
      "Instalación, ampliación y reparación de Sistemas de cámaras de vigilancia que operan a través de internet. Monitorea tu hogar o empresa desde cualquier dispositivo con acceso a internet.",
    icon: (
      <Image
        src="/images/camera.png"
        alt="security-camera"
        height={125}
        width={125}
      />
    ),
  },
  {
    background: "card-background-two",
    title: "Service Especializado",
    description:
      "Reparación de notebook, tablet, impresoras chorro tinta y laser, PCs, monitores. Configuracion e instalacion de sistemas de redes, wi-fi, cableado, extensores y repetidores de señal wi-fi.",
    icon: (
      <Image
        src="/images/computer.png"
        alt="computer"
        height={100}
        width={125}
      />
    ),
  },
  {
    background: "card-background-three",
    title: "Hardware informático",
    description:
      "Venta de notebooks, PCs, impresoras, monitores, cartuchos, toner, (compatibles y originales). Teclados, mouse, auriculares, etc. Adapatadores, cables hdmi, vga, red, usb, conectores rj45.",
    icon: (
      <Image
        src="/images/keyboard.png"
        alt="keyboard"
        height={125}
        width={125}
      />
    ),
  },
];

const Services = ({ id }: { id: string }) => {
  return (
    <section className="min-h-svh w-screen violet-bg" id={id}>
      <BrandSlider/>
        <div className="mx-auto max-w-6xl py-24 sm:py-40 lg:py-50 px-12 flex md:gap-20 gap-4 flex-col come-in">
          <div className="flex gap-8 flex-col text-white come-in">
            <h1 className="text-5xl font-bold text-center">Servicios</h1>
            <p className=" text-center">
              Brindamos servicios de la más alta calidad, atendiendo siempre las
              necesidades de nuestros clientes
            </p>
          </div>
          <div className="flex justify-center items-start gap-10 flex-wrap">
            {CARDS.map(({ background, title, description, icon }, index) => {
              return (
                <Card
                  key={index}
                  background={background}
                  title={title}
                  description={description}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
    </section>
  );
};

export default Services;
