export function Skills() {
  // Technology logos with their respective URLs
  const techLogos = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ];

  // Split logos into two rows
  const row1 = techLogos.slice(0, Math.ceil(techLogos.length / 2));
  const row2 = techLogos.slice(Math.ceil(techLogos.length / 2));

  return (
    <section id="skills" className="py-20 px-4 bg-[#2d3365] overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center gap-6">
          {/* Title with integrated icon */}
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light text-gray-100 mb-3 tracking-tight flex items-center justify-center gap-2 flex-wrap">
              <span>Habilidades /</span>
              <span className="text-[#F4BB46] font-bold flex items-center">
                Tecn
                <svg
                  className="w-10 h-10 md:w-14 md:h-14 mx-0.5"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8L4 12L8 16"
                    stroke="#F4BB46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8L20 12L16 16"
                    stroke="#F4BB46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 4L10 20"
                    stroke="#F4BB46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                logías
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Herramientas y tecnologías que utilizo para crear soluciones
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* First Row - Scrolling Right */}
        <div className="relative">
          <div className="flex gap-4 md:gap-8 animate-scroll-right">
            {/* Duplicate logos for seamless loop */}
            {[...row1, ...row1, ...row1].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-[#232757] rounded-xl border border-[#F4BB46]/20 p-3 md:p-4 flex items-center justify-center hover:border-[#F4BB46] hover:scale-110 transition-all duration-300 group"
              >
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left */}
        <div className="relative">
          <div className="flex gap-4 md:gap-8 animate-scroll-left">
            {/* Duplicate logos for seamless loop */}
            {[...row2, ...row2, ...row2].map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-[#232757] rounded-xl border border-[#F4BB46]/20 p-3 md:p-4 flex items-center justify-center hover:border-[#F4BB46] hover:scale-110 transition-all duration-300 group"
              >
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}