import Figma from "../assets/figma.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import PHP from "../assets/php.svg";
import photoshop from "../assets/photoshop.png";
import indesign from "../assets/indesign.png";
import HTMLCSSJS from "../assets/html-css-js.webp";
import Git from "../assets/git-bash.svg";

const skills = [
  { name: "Figma", icon: Figma, level: 95 },
  { name: "HTML CSS & JS", icon: HTMLCSSJS, level: 75 },
  { name: "Git", icon: Git, level: 60 },
  { name: "React", icon: react, level: 60 },
  { name: "Tailwind CSS", icon: tailwind, level: 50 },
  { name: "PHP", icon: PHP, level: 60 },
  { name: "Photoshop", icon: photoshop, level: 80 },
  { name: "InDesign", icon: indesign, level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-3 text-4xl font-semibold sm:text-5xl">Skills</h2>
          <p className="text-lg text-muted-foreground">
            My skillset in design and web development
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <li
              key={skill.name}
              className="rounded-2xl bg-card p-5"
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 60}
            >
              <div className="mb-5 flex items-center gap-3">
                <img src={skill.icon} alt="" className="size-10 object-contain" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              <div className="mb-2 flex justify-between text-sm">
                <span className="text-muted-foreground">Proficiency</span>
                <span className="font-medium tabular-nums">{skill.level}%</span>
              </div>
              <div
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
              >
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
