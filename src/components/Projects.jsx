import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/project-1.png";
import project2 from "../assets/parentproject.png";
import project3 from "../assets/fixxar.png";
import project4 from "../assets/camping.png";
import project5 from "../assets/fortune.png";
import project6 from "../assets/powerpeak.png";

const Tags = ({ tags }) => (
  <ul className="flex flex-wrap gap-1.5">
    {tags.map((tag) => (
      <li key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
        {tag}
      </li>
    ))}
  </ul>
);

const Projects = () => {
  // State to manage the open modal project
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Food Blog",
      desc: "MERN project where I learned the basics and applied it to make a food blog",
      process:
        "Developed through clear backend, UX, and deployment phases. Built secure Node.js/Express APIs with Bcrypt encryption, implemented AWS S3 cloud storage for 15MB image uploads, and established relational MongoDB querying. Redesigned the entire UI using TailwindCSS—taking structural inspiration from Pinch of Yum—and incorporated a mobile-responsive ShadCN carousel alongside a custom form live-preview component before hosting the final application on Vercel and Render.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      demoLink: "https://github.com/ColinZuko/Mern-Practice",
    },
    {
      id: 2,
      title: "Parent tracker app",
      desc: "Figma design for an app in which parents could keep track of the agenda of their kids.",
      process:
        "Conducted user research to understand typical parental pain points regarding scheduling. Developed wireframes, established a warm visual identity, and built a high-fidelity interactive prototype for testing.",
      image: project2,
      tags: ["Figma", "Adobe Illustrator"],
      demoLink:
        "https://www.figma.com/design/cAge9WMW7zC5uDK3pSvpIQ/Personal-Portfolio-2?node-id=0-1&t=ZS4keX8UJDkKYYkI-1;",
    },
    {
      id: 3,
      title: "Fixxar advertisement",
      desc: "Designing and coming up with advertising materials for Fixxar Haaksbergen and in store posters.",
      process:
        "Collaborated with the store managers to align with corporate branding rules. Focused on typography hierarchy and color contrast to maximize visual impact for physical foot traffic.",
      image: project3,
      tags: ["InDesign", "Photoshop"],
      demoLink:
        "https://www.canva.com/design/DAHDxgYSq1Q/-IN0IRVCpUXbzh7xwhOELQ/edit?utm_content=DAHDxgYSq1Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 4,
      title: "Camping website",
      desc: "Rebuilt the campaing website of my parents as part of my personal portfolio module.",
      process:
        "Analyzed the previous iteration to fix bottleneck user flows. Re-structured the site content using WordPress, optimized on-page SEO targeting local keywords, and ensured mobile responsiveness.",
      image: project4,
      tags: ["HTML", "CSS", "JavaScript", "Publishing", "Wordpress", "SEO"],
      demoLink: "https://www.campingkoordes.nl",
    },
    {
      id: 5,
      title: "Fortune",
      desc: "Final group project of CMGT making a game in collaboration with TweeDuuster.",
      process:
        "Worked in an agile development squad as a core programmer/designer. Handled asset integration in Unity, configured game loop mechanics in C#, and assisted in UX/UI testing iterations.",
      image: project5,
      tags: ["C#", "Figma", "Unity"],
      demoLink: "https://allerleistuff.itch.io/fortune",
    },
    {
      id: 6,
      title: "Powerpeak",
      desc: "Mobile app for UI/UX advanced, which users can use to keep track of power usage.",
      process:
        "Designed dashboards prioritizing complex data visualization for regular consumers. Executed running digital A/B tests on two different layout variations to see which generated better user comprehension.",
      image: project6,
      tags: ["Figma", "A/B Testing"],
      demoLink:
        "https://www.figma.com/proto/1NrVrGJsMys0OwVpH5GNBW/UIUXA-PowerPeak?page-id=2%3A36&node-id=3-2&starting-point-node-id=3%3A2&t=zLv2J1Jqppj2HUNO-1",
    },
  ];

  // Block scrolling on the body and close on Escape while a project is open
  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-3 text-4xl font-semibold sm:text-5xl">Projects</h2>
          <p className="text-lg text-muted-foreground">A showcase of my recent work</p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          {projects.map((project) => (
            <li key={project.id} className="flex flex-col overflow-hidden rounded-2xl bg-background">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group flex flex-1 flex-col text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{project.desc}</p>
                  <div className="mt-auto">
                    <Tags tags={project.tags} />
                  </div>
                </div>
              </button>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-5 mb-5 inline-flex items-center gap-1 self-start py-2 text-sm font-medium text-primary hover:underline"
              >
                View demo <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/ColinZuko?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            <FaGithub aria-hidden="true" />
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {/* Overlay Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-popover shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-background/80 backdrop-blur hover:bg-secondary"
            >
              <X className="size-5" />
            </button>

            <div className="overflow-y-auto">
              <img src={selectedProject.image} alt="" className="aspect-video w-full object-cover" />

              <div className="space-y-5 p-6 sm:p-8">
                <div>
                  <h3 id="project-dialog-title" className="mb-3 text-2xl font-semibold">
                    {selectedProject.title}
                  </h3>
                  <Tags tags={selectedProject.tags} />
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-semibold">Overview</h4>
                  <p className="leading-relaxed text-muted-foreground">{selectedProject.desc}</p>
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-semibold">The Process</h4>
                  <p className="leading-relaxed text-muted-foreground">{selectedProject.process}</p>
                </div>

                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                >
                  View Project Demo <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
