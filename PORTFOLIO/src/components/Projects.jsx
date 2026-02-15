export default function Projects() {
  const projects = [
  {
    name: "Task Management Application",
    description:
      "Built a fully responsive task management web application with complete CRUD functionality. Implemented global state management using Context API, integrated dark/light mode, and designed multi-page routing for seamless user experience.",
    image: "/task_dashboard.png",
    tech: ["React", "Context API", "LocalStorage", "React Router"],
    live: "https://taskdashboard-tan.vercel.app/",
    github:
      "https://github.com/Maneesha-sudo/Portfolio/tree/main/task_dashboard",
    featured: true,
  },
  {
    name: "NextBuy – E-Commerce App",
    description:
      "Developed a modern and responsive e-commerce application with authentication, protected routes, and dynamic cart management. Integrated external REST APIs using Axios and implemented secure state management for a smooth shopping experience.",
    image: "/NextBuy.png",
    tech: ["React", "Context API", "Tailwind CSS", "Axios"],
    live: "https://nextbuyapprepo.vercel.app/",
    github: "https://github.com/Maneesha-sudo/Portfolio/tree/main/NextBuy",
    featured: true,
  }
];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4 
              bg-gradient-to-r from-blue-300 to-pink-500 
               bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-slate-400 mb-16">
          A showcase of my <span className="text-emerald-400">creative work</span> and technical expertise
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10
                         rounded-2xl overflow-hidden shadow-lg
                         transition-all duration-500
                         hover:-translate-y-3 hover:shadow-emerald-500/20 hover:shadow-2xl"
            >


              {/* Image */}
              <div className="bg-slate-900 p-4 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.name}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 hover:text-emerald-400 transition"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 hover:text-emerald-400 transition"
                  >
                    💻 View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
