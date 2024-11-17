import SocialMedia from "./SocialMedia";


const Contact = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <div className="bg-BlueMain mt-10 pb-8" id="contacto">
      <div className=" w-[80%] m-auto py-10 flex items-center justify-between gap-x-4">
        <div className="py-8">
          <h1 className="text-4xl font-bold text-YellowMain mb-4">
            Hagamos equipo para convertir tu próximo proyecto en un éxito
          </h1>
          <p className="text-white">
            Transformemos tus ideas en realidad. Juntos, hagamos de tu próximo
            proyecto algo extraordinario.
          </p>
        </div>
        <button className="btnContact">Contáctame</button>
      </div>

      <div className="w-[80%] m-auto flex items-center justify-between pb-2">
        <SocialMedia />

        <p className="text-white">
          &copy; {currentYear} Renzo Ramos. Todos los derechos reservados.
        </p>
      </div>

      <hr className=" w-[80%] m-auto" />
    </div>
  );
}

export default Contact