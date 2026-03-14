import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/parentProject.png'
import project3 from '../assets/fixxar.png'
import project4 from '../assets/camping.png'
import project5 from '../assets/fortune.png'
import project6 from '../assets/powerpeak.png'


const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Task Tracker',
      desc: 'MERN project where I learned the basics and applied it to make a task tracker',
      image: project1,
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      demoLink: 'https://github.com/ColinZuko/Mern-Practice',
    },
    {
      id: 2,
      title: 'Parent tracker app',
      desc: 'Figma design for an app in which parents could keep track of the agenda of their kids.',
      image: project2,
      tags: ['Figma', 'Adobe Illustrator'],
      demoLink: 'https://www.figma.com/design/cAge9WMW7zC5uDK3pSvpIQ/Personal-Portfolio-2?node-id=0-1&t=ZS4keX8UJDkKYYkI-1;',
    },
    {
      id: 3,
      title: 'Fixxar advertisement',
      desc: 'Designing and coming up with advertising materials for Fixxar Haaksbergen and in store posters.',
      image: project3,
      tags: ['InDesign', 'Photoshop'],
      demoLink: 'https://www.canva.com/design/DAHDxgYSq1Q/-IN0IRVCpUXbzh7xwhOELQ/edit?utm_content=DAHDxgYSq1Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      id: 4,
      title: 'Camping website',
      desc: 'Rebuilt the campaing website of my parents as part of my personal portfolio module.',
      image: project4,
      tags: ['HTML', 'CSS', 'JavaScript', 'Publishing'],
      demoLink: 'https://www.campingkoordes.nl',
    },
    {
      id: 5,
      title: 'Fortune',
      desc: 'Final group project of CMGT making a game in collaboration with TweeDuuster.',
      image: project5,
      tags: ['C#', 'Figma' , 'Unity'],
      demoLink: 'https://allerleistuff.itch.io/fortune',
    },
    {
      id: 6,
      title: 'Powerpeak',
      desc: 'Mobile app for UI/UX advanced, which users can use to keep track of power usage.',
      image: project6,
      tags: ['Figma', 'A/B Testing'],
      demoLink: 'https://www.figma.com/proto/1NrVrGJsMys0OwVpH5GNBW/UIUXA-PowerPeak?page-id=2%3A36&node-id=3-2&starting-point-node-id=3%3A2&t=zLv2J1Jqppj2HUNO-1',
    },
  ]

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #228B22, #22c55e)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            A showcase of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : 'e5e7eb',
              }}
              className="group rounded-xl border hover:border-orange-500/50 transition-all duration-300"
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
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563',
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.demoLink}
                    target={project.demoLink !== '#' ? '_blank' : '_self'}
                    rel={project.demoLink !== '#' ? 'noopener noreferrer' : ''}
                    style={{
                      background:
                        'linear-gradient(to right, #228B22, #22c55e)',
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/ColinZuko?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(to right, #228B22, #22c55e)',
            }}
            className="inline-flex items-center gap-2 px-7 py-4 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
