import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">
      {/* Glow Background Effect */}
      <div className="absolute w-72 h-72 bg-violet-600/20 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl bottom-20 right-20"></div>

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="px-4 py-2 rounded-full border border-violet-500 text-sm text-violet-400">
          ✨ Welcome to my universe
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight"
      >
        <span>Frontend </span>
        <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
          Developer
        </span>
        <br />

      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 max-w-2xl text-slate-400 text-lg"
      >
        I craft <span className="text-violet-400">beautiful</span>,{" "}
        <span className="text-pink-400">interactive</span> web experiences
        with modern technologies.
        <br />
        Passionate about clean code and seamless user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-6 mt-10 flex-wrap justify-center"
      >
        {/* Explore Button */}
        <a
          href="#projects"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:scale-105 transition duration-300 shadow-lg"
        >
          🚀 Explore My Universe
        </a>

        {/* Download CV Button */}
        <a
          href="/resume.pdf"
          download
          className="px-8 py-3 rounded-full border border-gray-600 hover:bg-slate-800 transition duration-300"
        >
          📄 Download CV
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex gap-6 mt-8 text-2xl"
      >
        <a
          href="https://github.com/Maneesha-sudo/Portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/mateti-maneesha/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-400 transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>

    </section>
  );
}
