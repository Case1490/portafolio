import Aboutme from '../assets/sobremi.png';
import CSSIcon from '../icons/CSSIcon';
import EmailIcon from '../icons/EmailIcon';
import HTMLIcon from '../icons/HTMLIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';
import ReactIcon from '../icons/ReactIcon';
import VueIcon from '../icons/VueIcon';

const AboutMe = () => {
  return (
    <div className="w-[80%] m-auto mt-10 pb-8 pt-[60px]" id="acerca">
      <div className="flex space-x-6  text-white rounded-xl ">
        <div className="w-[50%] animationLeft">
          <img src={Aboutme} alt="Sobre mi" className="image-iam" />
        </div>
        <div className="w-[50%] rounded-tl-xl rounded-bl-xl flex flex-col justify-around animationRight">
          <h1 className="text-YellowMain font-bold text-5xl">Acerca de mí</h1>
          <p>
            Soy frontend developer de Lima, Perú, apasionado por crear
            interfaces atractivas y funcionales que brinden una excelente
            experiencia al usuario. Disfruto aprender de forma autodidacta y
            mejorar constantemente para ofrecer soluciones innovadoras en cada
            proyecto
          </p>

          <div className=" space-y-2 my-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-x-2">
                <LocationIcon />
                <p className="font-bold">Dirección</p>
              </div>

              <span>:</span>
              <h1>Comas, Lima, Perú</h1>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-x-2">
                <PhoneIcon />
                <p className="font-bold">Teléfono</p>
              </div>

              <span>:</span>
              <h1>+51 977 139 843</h1>
            </div>

            <div className="flex items-center space-x-6">
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
            <div className="flex gap-x-6 mt-4">
              <div className="flex items-center gap-x-1">
                <HTMLIcon />
                <p>HTML</p>
              </div>
              <div className="flex items-center gap-x-1">
                <CSSIcon />
                <p>CSS</p>
              </div>
              <div className="flex items-center gap-x-1">
                <JavaScriptIcon />
                <p>JavaScript</p>
              </div>
              <div className="flex items-center gap-x-1">
                <VueIcon />
                <p>Vue.js</p>
              </div>
              <div className="flex items-center gap-x-1">
                <ReactIcon />
                <p>ReactJS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe