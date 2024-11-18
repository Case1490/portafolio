import Iam from '../assets/persona.png';
import ComputerIcon from '../icons/ComputerIcon';

const MainPage = () => {
  return (
    <div className=" pt-[120px] lg:pt-[60px]" id="inicio">
      <div className=" w-[80%] m-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="text-center sm:text-left text-white">
          <p className=" text-4xl sm:text-6xl leading-6">Hola, mi nombre es</p>
          <h1 className="text-5xl sm:text-7xl font-bold my-2 text-YellowMain">
            Renzo Ramos
          </h1>
          <div className="flex gap-x-2">
            <ComputerIcon />
            <p className=" text-sm sm:text-2xl font-bold mb-6 titlePosition">
              Un creativo Freelancer & Frontend Developer
            </p>
          </div>

          <div className=" flex gap-x-4 text-black justify-center sm:justify-start">
            <a
              href="#"
              className="bg-YellowMain flex items-center justify-center p-2 sm:p-4 rounded-full text-lg sm:text-xl hover:bg-yellow-500"
            >
              Saber más
            </a>
            <a
              href="#"
              className="bg-white flex items-center justify-center p-2 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl hover:bg-gray-300"
            >
              Ver CV
            </a>
          </div>
        </div>

        <div className="w-[200px] sm:w-[350px]">
          <img src={Iam} alt="Renzo Ramos" className="image-iam" />
        </div>
      </div>
    </div>
  );
}

export default MainPage