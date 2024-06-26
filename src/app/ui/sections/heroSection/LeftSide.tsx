const LeftSide = () => {
  return (
    <div className="mx-auto max-w-2xl flex px-12 fall items-start md:items-center py-24 md:py:0 h-full">
      <div className="text-center md:text-left fade-out">
        <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
          Tu Socio Confiable en Tecnología
        </h1>
        <p className="mt-6 text-lg leading-8 text-white-600">
          Encuentra todo lo que necesitas para potenciar tu mundo digital. Desde
          PCs y notebooks hasta impresoras, teclados y ratones de primera
          calidad. Además, confía en nuestro equipo de expertos para mantener
          tus equipos en óptimas condiciones con nuestro servicio de reparación
          y mantenimiento. ¡Haz que la tecnología trabaje para ti con nosotros!
        </p>
        <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6 cursor-pointer">
          <a
            href="tel:+59899624437"
            className="rounded-md bg-[color:var(--button-background)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
