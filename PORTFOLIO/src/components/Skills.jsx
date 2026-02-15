import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiReactrouter, SiAxios } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact />, color: "bg-blue-500" },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare />, color: "bg-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "bg-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />,  color: "bg-blue-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />,  color: "bg-cyan-400" },
    { name: "React Router", icon: <SiReactrouter />,  color: "bg-pink-500" },
    { name: "Axios", icon: <SiAxios />,  color: "bg-purple-500" },
    { name: "Fetch API", icon: <FaJsSquare />,  color: "bg-yellow-500" },
    { name: "REST API Integration", icon: <FaReact />, color: "bg-green-500" },
    { name: "Context API", icon: <FaReact />,  color: "bg-indigo-500" },
    { name: "LocalStorage", icon: <FaJsSquare />,  color: "bg-amber-500" },
    { name: "Git", icon: <FaGitAlt />,  color: "bg-red-500" },
    { name: "GitHub", icon: <FaGithub />, color: "bg-gray-400" },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12
        bg-gradient-to-r from-yellow-400 to-pink-500 
               bg-clip-text text-transparent">
         Skills & Technologies
        </h2>
        <h4 className="text-xl text-center mb-8">
          The magical tools that i used to bring ideas to life</h4>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-slate-900 p-6 rounded-2xl shadow-lg
                         transform transition-all duration-500
                         hover:rotate-6 hover:scale-105 hover:-translate-y-2
                         hover:shadow-2xl hover:shadow-cyan-500/20
                         cursor-pointer border border-slate-800"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-white 
                              group-hover:text-cyan-400 
                              transition duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className={`${skill.color} h-2 rounded-full transition-all duration-700`}
                  style={{ width: skill.level }}
                ></div>
              </div>

              {/* Level Text */}
              <p className="text-sm text-slate-400 mt-2">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
