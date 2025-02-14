import SocialMedia from "./SocialMedia";

const Contact = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <div className="bg-BlueMain mt-10 pb-8" id="contacto">
      <div className=" w-[80%] m-auto py-10 flex-col md:flex-row flex items-center justify-between gap-x-4">
        <div className="py-8">
          <h1 className="text-3xl text-center md:text-4xl md:text-left font-bold text-YellowMain mb-4">
            Hagamos equipo para convertir tu próximo proyecto en un éxito
          </h1>
          <p className="text-white text-center md:text-left">
            Transformemos tus ideas en realidad. Juntos, hagamos de tu próximo
            proyecto algo extraordinario.
          </p>
        </div>
        <a
          href="https://wa.me/51977139843"
          target="_blank"
          rel="noopener noreferrer"
          className="btnContact"
        >
          Contáctame
        </a>
      </div>

      <div className="w-[80%] m-auto flex-col md:flex-row space-y-4 md:space-y-0 flex items-center justify-between pb-2 pt-8 md:pt-0">
        <SocialMedia />

        <p className="text-white text-center sm:text-left">
          &copy; {currentYear} Renzo Ramos. Todos los derechos reservados.
        </p>
      </div>

      <hr className=" w-[80%] m-auto" />
    </div>
  );
};

export default Contact;
