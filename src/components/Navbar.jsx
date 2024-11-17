import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const divs = document.querySelectorAll("div[id]"); // Todos los divs con id
    const observer = new IntersectionObserver(
      (entries) => {
        // Variable para rastrear la sección activa
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Solo se considera la sección visible
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          setActiveSection(visibleSection); // Actualiza la sección activa
        }
      },
      {
        threshold: 0.1, // 10% de la sección visible para activarse
        rootMargin: "0px 0px -50% 0px", // Ajuste para anticipar la visibilidad de la siguiente sección
      }
    );

    divs.forEach((div) => observer.observe(div));

    return () => observer.disconnect();
  }, []);

  console.log("Active Section:", activeSection)

  return (
    <div
      className={`fixed w-full z-50 transition duration-300 ${
        isScrolled ? " blurScroll" : ""
      }`}
    >
      <div className="flex items-center justify-between w-[80%] m-auto py-4">
        <div className="w-[150px]">
          <img src={Logo} alt="Renzo developer" />
        </div>

        <div>
          <ul className="flex space-x-4 text-white">
            <li>
              <a
                href="#inicio"
                className={`link ${activeSection === "inicio" ? "active" : ""}`}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#acerca"
                className={`link ${activeSection === "acerca" ? "active" : ""}`}
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className={`link ${
                  activeSection === "servicios" ? "active" : ""
                }`}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className={`link ${
                  activeSection === "habilidades" ? "active" : ""
                }`}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className={`link ${activeSection === "experiencia" ? "active" : ""}`}
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#portafolio"
                className={`link ${
                  activeSection === "portafolio" ? "active" : ""
                }`}
              >
                Portafolio
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={`link ${
                  activeSection === "contacto" ? "active" : ""
                }`}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
