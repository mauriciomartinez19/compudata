import EmailForm from "./EmailForm";

const Email = () => {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
        Envíanos un mail
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center">
        ¿Tienes algún problema con tu computadora o necesitas instalar cámaras
        de videovigilancia? ¡Déjanos ayudarte! Contáctanos por correo
        electrónico para obtener asistencia técnica rápida y profesional.
      </p>
      <EmailForm />
    </div>
  );
};

export default Email;
