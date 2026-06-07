import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import project1 from "../assets/project-1.png";
import project2 from "../assets/parentproject.png";
import project3 from "../assets/fixxar.png";
import project4 from "../assets/camping.png";
import project5 from "../assets/fortune.png";
import project6 from "../assets/powerpeak.png";

const Projects = ({ darkMode }) => {
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

  // Block scrolling on the body when a project is opened
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #228B22, #22c55e)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb", // Fixed missing #
              }}
              className="group rounded-xl border hover:border-green-500/50 transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3 line-clamp-2"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.demoLink}
                    target={project.demoLink !== "#" ? "_blank" : "_self"}
                    rel={project.demoLink !== "#" ? "noopener noreferrer" : ""}
                    style={{
                      background: "linear-gradient(to right, #228B22, #22c55e)",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Footer Link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/ColinZuko?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #228B22, #22c55e)",
            }}
            className="inline-flex items-center gap-2 px-7 py-4 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>

      {/* Overlay Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              backgroundColor: darkMode ? "#1f2937" : "#ffffff",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="relative w-full max-w-2xl rounded-2xl border overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{ color: darkMode ? "#9ca3af" : "#4b5563" }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-500/10 transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Modal Content Wrapper (Scrollable if content overflows) */}
            <div className="overflow-y-auto p-8 pt-14 space-y-4">
              <div className="h-60 w-full overflow-hidden rounded-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2.5 py-1 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <hr
                  style={{ borderColor: darkMode ? "#374151" : "#e5e7eb" }}
                  className="my-4"
                />

                <h4 className="text-sm font-semibold uppercase tracking-wider mb-1 text-green-500">
                  Overview
                </h4>
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
                >
                  {selectedProject.desc}
                </p>

                <h4 className="text-sm font-semibold uppercase tracking-wider mb-1 text-green-500">
                  The Process
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
                >
                  {selectedProject.process}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={selectedProject.demoLink}
                  target={selectedProject.demoLink !== "#" ? "_blank" : "_self"}
                  rel={
                    selectedProject.demoLink !== "#"
                      ? "noopener noreferrer"
                      : ""
                  }
                  style={{
                    background: "linear-gradient(to right, #228B22, #22c55e)",
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>View Project Demo</span>
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
