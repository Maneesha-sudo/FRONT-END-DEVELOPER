import { FiHome, FiUser, FiBriefcase, FiCode, FiFolder, FiMail } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Logo */}
        <div>
          <h1 className="text-xl font-bold text-pink-400">
            Maneesha Mateti
          </h1>
          <p className="text-xs text-slate-400 -mt-1">
            Frontend Developer (React)
          </p>
        </div>

        {/* Right Pill Navigation */}
        <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full 
                        bg-slate-900/70 backdrop-blur-md border border-slate-700 shadow-lg">

          <NavItem href="#home" icon={<FiHome />} text="Home" />
          <NavItem href="#about" icon={<FiUser />} text="About" />
          <NavItem href="#skills" icon={<FiCode />} text="Skills" />
          <NavItem href="#projects" icon={<FiFolder />} text="Projects" />
          <NavItem href="#experience" icon={<FiBriefcase />} text="Experience" />
          <NavItem href="#contact" icon={<FiMail />} text="Contact" />

        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, icon, text }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm text-slate-300 hover:text-violet-400 transition duration-300"
    >
      <span className="text-base">{icon}</span>
      {text}
    </a>
  );
}
