import CardExperience from "./CardExperience";

const Experience = () => {
  const experienceData = [
    {
      date: "Octubre 2022 - Marzo 2023",
      company: "Tengolaidea",
      paragraphExperience:
        "Desarrollé su página web y trabajé en varios proyectos, mejorando mis habilidades técnicas y adaptando soluciones a objetivos de marketing",
    },
    {
      date: "Abril 2023 - Setiembre 2023",
      company: "JevicTechnology",
      paragraphExperience:
        "Diseñé una tienda en línea con categorías organizadas, compras seguras y detalles de productos, fortaleciendo mis habilidades en ecommerce",
    },
    {
      date: "Octubre 2023 - Noviembre 2024",
      company: "Futechperu",
      paragraphExperience:
        "Creé un sitio funcional para motos eléctricas, destacando la movilidad eléctrica y mejorando mi experiencia en UX/UI para el sector automotriz",
    },
    {
      date: "Diciembre 2024 - Enero 2025",
      company: "GrupoPrinfer",
      paragraphExperience:
        "Desarrollé una página enfocada en productos industriales, optimizando la búsqueda de productos y la experiencia B2B",
    },
  ];

  return (
    <div className="w-[80%] m-auto" id="experiencia">
      <div className="">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-YellowMain animationLeft">
          Mi Experiencia
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
          {experienceData.map((experience, index) => (
            <CardExperience
              key={index}
              date={experience.date}
              company={experience.company}
              paragraphExperience={experience.paragraphExperience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
