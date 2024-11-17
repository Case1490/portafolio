import Service from "./Service"

// IMPORTANDO ICONOS
import InterfaceIcon from '../icons/InterfaceIcon';
import InteractionIcon from "../icons/InteractionIcon";
import CustomizationIcon from "../icons/CustomizationIcon";
import AdaptationIcon from "../icons/AdaptationIcon";
import ApiIcon from "../icons/ApiIcon";
import TestIcon from "../icons/TestIcon";


const Services = () => {

  const serviceData = [
    {
      icon: <InterfaceIcon />,
      title: "Diseño de Interfaces de Usuario (UI)",
      paragraph:
        "Crear interfaces visualmente atractivas y funcionales que mejoren la experiencia del usuario",
    },
    {
      icon: <InteractionIcon />,
      title: "Desarrollo de Componentes Interactivos",
      paragraph:
        " Implementar menús, formularios, animaciones y otros elementos interactivos con JavaScript y frameworks como React o Vue",
    },
    {
      icon: <CustomizationIcon />,
      title: "Optimización de Rendimiento",
      paragraph:
        "Reducir tiempos de carga y hacer que la web sea rápida mediante la optimización de recursos como imágenes y scripts",
    },
    {
      icon: <AdaptationIcon />,
      title: "Adaptabilidad y Responsividad",
      paragraph:
        "Asegurarse de que el sitio funcione correctamente en dispositivos móviles, tablets y escritorios, usando técnicas de diseño responsive",
    },
    {
      icon: <ApiIcon />,
      title: "Integración con APIs",
      paragraph:
        "Integrar la interfaz con servicios externos para mostrar o enviar datos en tiempo real",
    },
    {
      icon: <TestIcon />,
      title: "Testing y Depuración",
      paragraph:
        "Realizar pruebas en distintos navegadores y dispositivos para detectar y corregir errores",
    },
  ];

  return (
    <div className="w-[80%] m-auto pt-[90px] pb-8" id="servicios">
      <div>
        <h1 className="text-center text-5xl font-bold text-YellowMain animationLeft">
          Mis Servicios
        </h1>

        <div className="mt-20 grid grid-cols-3 place-items-center gap-4 animationOpacity">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              paragraph={service.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services