import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import CrossIcon from "../icons/CrossIcon";
import MenuIcon from "../icons/MenuIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const divs = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    divs.forEach((div) => observer.observe(div));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed w-full z-50 transition duration-300 ${
        isScrolled ? "blurScroll" : ""
      }`}
    >
      <div className="flex items-center justify-between w-[90%] m-auto py-4">
        {/* Logo */}
        <div className="w-[150px]">
          <img src={Logo} alt="Renzo developer" />
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
        </button>

        {/* Menú */}
        <div
          className={`absolute md:static top-[80px] left-0 w-full md:w-auto bg-BlueMain md:bg-transparent transition-all duration-300 ${
            isMenuOpen ? "max-h-screen py-8" : "max-h-0 overflow-hidden"
          } md:max-h-full md:flex md:space-x-4 md:items-center`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 text-white">
            {[
              "inicio",
              "acerca de",
              "servicios",
              "habilidades",
              "experiencia",
              "portafolio",
              "contacto",
            ].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`link ${
                    activeSection === section ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Cerrar menú al seleccionar un enlace
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
