import CardProject from "./CardProject";
import JevicTecnology from '../assets/jevic.png';
import Futechperu from "../assets/futechweb.png";
import Prinfer from '../assets/prinfer.png';
import Tengolaidea from '../assets/tengolaidea.png';
import Comideli from '../assets/comideli.png';
import PaisData from '../assets/api_pais.png';

// IMPORTANDO ICONOS
import HTMLIcon from "../icons/HTMLIcon";
import TailwindIcon from "../icons/TailwindIcon";
import VueIcon from "../icons/VueIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import CSSIcon from "../icons/CSSIcon";
import ReactIcon from "../icons/ReactIcon";


const Projects = () => {
  // Array de proyectos directamente en el componente
  const projectData = [
    {
      title: "JevicTecnology SAC",
      url: "https://example.com/proyecto1",
      image: JevicTecnology,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
    {
      title: "Futechperu",
      url: "https://example.com/proyecto2",
      image: Futechperu,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
    {
      title: "GrupoPrinfer",
      url: "https://example.com/proyecto3",
      image: Prinfer,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
    {
      title: "Tengolaidea",
      url: "https://example.com/proyecto4",
      image: Tengolaidea,
      icons: [HTMLIcon, TailwindIcon, CSSIcon, ReactIcon],
    },
    {
      title: "Comideli",
      url: "https://example.com/proyecto5",
      image: Comideli,
      icons: [HTMLIcon, TailwindIcon, ReactIcon, VueIcon],
    },
    {
      title: "Paíes Data",
      url: "https://example.com/proyecto6",
      image: PaisData,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
  ];

  return (
    <div className="w-[80%] m-auto pt-[90px] pb-8 min-h-screen" id="portafolio">
      <div>
        <h1 className="text-center font-bold text-5xl text-YellowMain animationLeft">
          Mis Proyectos Destacados
        </h1>

        <div className="mt-10 grid gap-4 grid-cols-3 place-items-center animationOpacity">
          {projectData.map((project, index) => (
            <CardProject
              key={index}
              title={project.title}
              url={project.url}
              image={project.image}
              icons={project.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
