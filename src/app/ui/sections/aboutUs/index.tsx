import FancyBackground from "../FancyBackground";

const AboutUs = ({id}:{id:string}) => {
  return (
    <section className="bg-white w-dvw text-black min-h-screen section-violet-bg text-white" id={id}>
      <FancyBackground>
        <div className="mx-auto max-w-6xl py-24 sm:py-40 lg:py-50 px-12 flex gap-20 flex-col come-in">
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-center">Sobre nosotros</h1>
            <p className=" text-center">
              Somos una empresa dedicada a la venta, service informático y
              sistemas de cámaras de vigilancia desde el año 1992. Nuestra vasta
              experiencia generando soluciones tanto a usuarios como empresas
              avalan nuestra vocación de servicio. Por nuestra trayectoria y
              permanencia estamos en constante actualización y generamos
              servicios en función del mercado y la sociedad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-8 justify-center items-center">
              <h2 className="text-3xl font-bold ">Nuestra Misión</h2>
              <p className=" text-center">
                En COMPUDATA agregamos valor a su compra. Brindándole soluciones
                integrales de IT y servicio de excelente calidad. Destacando a
                su vez asesoramiento especializado y stock permanente.
              </p>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">
              <h2 className="text-3xl font-bold ">Nuestra Visión</h2>
              <p className=" text-center">
                Posicionarnos y constituirnos como una empresa líder en el
                mercado, capaz de proveer productos, servicios de nivel y
                excelencia. Y así lograr ser referentes en el mercado
                informático como una empresa que transmite confianza, respaldo y
                solidez.
              </p>
            </div>
          </div>
        </div>
      </FancyBackground>
    </section>
  );
};

export default AboutUs;
