import Aboutme from "../assets/sobremi.png";
import TailwindIcon from "../icons/TailwindIcon";
import EmailIcon from "../icons/EmailIcon";
import JavaScriptIcon from "../icons/JavaScriptIcon";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ReactIcon from "../icons/ReactIcon";
import MysqlIcon from "../icons/MysqlIcon";
import NodeIcon from "../icons/NodeIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import BootstrapIcon from "../icons/BootstrapIcon";
import GitHubIcon from "../icons/GitHubIcon";
import FigmaIcon from "../icons/FigmaIcon";

const AboutMe = () => {
  return (
    <div className="w-[80%] m-auto mt-10 pb-8 pt-[60px]" id="acerca">
      <div className="flex space-x-6 items-center flex-col lg:flex-row text-white">
        <div className=" w-[70%] lg:w-[50%] animationLeft order-2 lg:order-1">
          <img src={Aboutme} alt="Sobre mi" className="image-iam " />
        </div>
        <div className="w-full lg:w-[50%] rounded-tl-xl rounded-bl-xl flex flex-col justify-around animationRight order-1 lg:order-2 mb-10 lg:mb-0">
          <h1 className="text-YellowMain font-bold text-4xl text-center sm:text-left sm:text-5xl mb-4 lg:mb-2">
            Acerca de mí
          </h1>
          <p className="text-center sm:text-left">
            Soy frontend developer de Lima, Perú, apasionado por crear
            interfaces atractivas y funcionales que brinden una excelente
            experiencia al usuario. Disfruto aprender de forma autodidacta y
            mejorar constantemente para ofrecer soluciones innovadoras en cada
            proyecto
          </p>

          <div className=" space-y-2 my-4">
            <div className="flex items-center space-x-1 sm:space-x-6">
              <div className="flex items-center gap-x-2">
                <LocationIcon />
                <p className="font-bold">Dirección</p>
              </div>

              <span>:</span>
              <h1>Comas, Lima, Perú</h1>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-6">
              <div className="flex items-center gap-x-2">
                <PhoneIcon />
                <p className="font-bold">Teléfono</p>
              </div>

              <span>:</span>
              <h1>+51 977 139 843</h1>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-6">
              <div className="flex items-center gap-x-2">
                <EmailIcon />
                <p className="font-bold">Correo</p>
              </div>

              <span>:</span>
              <h1>renzoramos414@gmail.com</h1>
            </div>
          </div>

          <div className="mt-2">
            <h1 className="font-bold text-3xl">Mis habilidades</h1>
            <div className="flex gap-x-6 mt-4 flex-wrap gap-y-4">
              <div className="flex items-center gap-x-1">
                <ReactIcon />
                <p>ReactJS</p>
              </div>
              <div className="flex items-center gap-x-1 bg-re">
                <NodeIcon />
                <p>Node Js</p>
              </div>
              <div className="flex items-center gap-x-1">
                <TailwindIcon />
                <p>Tailwind CSS</p>
              </div>
              <div className="flex items-center gap-x-1">
                <JavaScriptIcon />
                <p>JavaScript</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FirebaseIcon />
                <p>Firebase</p>
              </div>
              <div className="flex items-center gap-x-1">
                <MysqlIcon />
                <p>MySQL</p>
              </div>
              <div className="flex items-center gap-x-1">
                <BootstrapIcon />
                <p>Bootstrap</p>
              </div>
              <div className="flex items-center gap-x-1">
                <GitHubIcon />
                <p>GitHub</p>
              </div>
              <div className="flex items-center gap-x-1">
                <FigmaIcon />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
