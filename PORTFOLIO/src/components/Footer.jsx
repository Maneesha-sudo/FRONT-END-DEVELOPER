import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left - Name & Role */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg">
            MM
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold text-lg">
              Maneesha Mateti
            </h3>
            <p className="text-slate-400 text-sm">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Center - Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Maneesha-sudo/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mateti-maneesha/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:matetimaneesha4@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-center md:text-right">
          <p className="text-slate-400 text-sm">
            © 2026 Maneesha Mateti
          </p>
          <p className="text-slate-500 text-sm">
            Crafted with <span className="text-pink-500">♥</span> and code
          </p>
        </div>

      </div>
    </footer>
  );
}
