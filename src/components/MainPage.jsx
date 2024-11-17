import Iam from '../assets/persona.png';
import ComputerIcon from '../icons/ComputerIcon';

const MainPage = () => {
  return (
    <div className="pt-[60px]" id='inicio'>
      <div className=" w-[80%] m-auto flex items-center justify-between">
        <div className="text-left text-white">
          <p className="text-6xl leading-6">Hola, mi nombre es</p>
          <h1 className="text-7xl font-bold my-2 text-YellowMain">
            Renzo Ramos
          </h1>
          <div className='flex gap-x-2'>
            <ComputerIcon />
            <p className="text-2xl font-bold mb-6 titlePosition">
              Un creativo Freelancer & Frontend Developer
            </p>
          </div>

          <div className=" flex gap-x-4 text-black">
            <a href="#" className="bg-YellowMain p-4 rounded-full text-xl hover:bg-yellow-500">
              Saber más
            </a>
            <a href="#" className="bg-white py-4 px-8 rounded-full text-xl hover:bg-gray-300">
              Ver CV
            </a>
          </div>
        </div>

        <div className="w-[350px]">
          <img src={Iam} alt="Renzo Ramos" className="image-iam" />
        </div>
      </div>
    </div>
  );
}

export default MainPage