import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Skill = ({ skill, percentage }) => {
  const [inView, setInView] = useState(false);

  // Usamos IntersectionObserver para detectar cuando la sección entra en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true); // Cambia el estado cuando la sección es visible
        }
      },
      { threshold: 0.3 } // Se activa cuando el 50% del elemento es visible
    );

    const element = document.getElementById(skill);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [skill]);

  // Animación usando react-spring
  const { width } = useSpring({
    width: inView ? `${percentage}%` : "0%", // Incrementa de 0% hasta el porcentaje deseado
    from: { width: "0%" },
  });

  return (
    <section id={skill} className="skill">
      <div className="skill-title">
        <h3 className="font-bold text-xl">{skill}</h3>
        <p className="font-bold text-xl">{percentage}%</p>
      </div>
      <div className="skill-bar-background">
        <animated.div
          className="skill-bar"
          style={{ width }} // Establece el ancho basado en la animación
        />
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    { skill: "React", percentage: 80 },
    { skill: "JavaScript", percentage: 90 },
    { skill: "CSS", percentage: 85 },
    { skill: "Node.js", percentage: 60 },
    { skill: "Tailwind", percentage: 75 },
    { skill: "Figma", percentage: 70 },
    { skill: "Bootstrap", percentage: 80 },
    { skill: "GitHub", percentage: 95 },
    { skill: "Express", percentage: 85 },
    { skill: "Mysql", percentage: 79 },
  ];

  return (
    <div className="skills-section" id="habilidades">
      <h1 className="text-center text-3xl md:text-5xl text-YellowMain font-bold my-4 animationLeft">
        Mis Habilidades
      </h1>

      <div className="skills-grid animationOpacity">
        {skills.map((skillData) => (
          <Skill
            key={skillData.skill}
            skill={skillData.skill}
            percentage={skillData.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
