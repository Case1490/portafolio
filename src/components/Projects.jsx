import CardProject from "./CardProject";
import JevicTecnology from "../assets/jevic.png";
import Futechperu from "../assets/futechweb.png";
import Prinfer from "../assets/prinfer.png";
import Tengolaidea from "../assets/tengolaidea.png";
import DevTree from "../assets/devtree.png";
import Pokedex from "../assets/pokedex.png";
import Webberyl from "../assets/webberyl.jpg";
import Comideli from "../assets/comideli.png";
import PaisData from "../assets/api_pais.png";

// IMPORTANDO ICONOS
import HTMLIcon from "../icons/HTMLIcon";
import TailwindIcon from "../icons/TailwindIcon";
import NodeIcon from "../icons/NodeIcon";
import BootstrapIcon from "../icons/BootstrapIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import CSSIcon from "../icons/CSSIcon";
import ReactIcon from "../icons/ReactIcon";
import MongoDBIcon from "../icons/MongoDBIcon";

const Projects = () => {
  // Array de proyectos directamente en el componente
  const projectData = [
    {
      title: "JevicTecnology SAC",
      url: "https://jevictecnology.netlify.app/",
      image: JevicTecnology,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
    {
      title: "Futechperu",
      url: "https://futechperu.com/",
      image: Futechperu,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
    {
      title: "GrupoPrinfer",
      url: "https://amazing-frangipane-853ae3.netlify.app/",
      image: Prinfer,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
    {
      title: "Tengolaidea",
      url: "https://tengolaidea.com/",
      image: Tengolaidea,
      icons: [HTMLIcon, TailwindIcon, CSSIcon, ReactIcon],
    },
    {
      title: "DevTree",
      url: "https://renzoramos-devtree.netlify.app/",
      image: DevTree,
      icons: [NodeIcon, TailwindIcon, ReactIcon, MongoDBIcon],
    },
    {
      title: "Webberyl",
      url: "https://webberyl.netlify.app/",
      image: Webberyl,
      icons: [HTMLIcon, TailwindIcon, ReactIcon],
    },
    {
      title: "Pokedéx",
      url: "https://case1490.github.io/pokedex/",
      image: Pokedex,
      icons: [HTMLIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
    {
      title: "Comideli",
      url: "https://comideli.netlify.app/",
      image: Comideli,
      icons: [FirebaseIcon, TailwindIcon, ReactIcon, BootstrapIcon],
    },
    {
      title: "Paíes Data",
      url: "https://case1490.github.io/API-pais/",
      image: PaisData,
      icons: [MongoDBIcon, TailwindIcon, FirebaseIcon, ReactIcon],
    },
  ];

  return (
    <div className="w-[80%] m-auto pt-[90px] pb-8 min-h-screen" id="portafolio">
      <div>
        <h1 className="text-center font-bold text-3xl sm:text-5xl text-YellowMain animationLeft">
          Mis Proyectos Destacados
        </h1>

        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
