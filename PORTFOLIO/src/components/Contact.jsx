import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-center">
      {/* Header */}
      <h2 className="text-4xl font-bold text-pink-500 mb-3">Get in Touch</h2>
      <div className="w-20 h-1 bg-pink-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-slate-400 text-lg mb-12">
        Ready to bring your <span className="text-pink-400 font-semibold">ideas to life</span>? Let's create something amazing together.
      </p>

      {/* Contact Card */}
      <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
        {/* Email */}
        <div className="flex items-center gap-4 mb-6">
          <FaEnvelope className="text-pink-400 text-xl" />
          <div className="text-left">
            <p className="text-slate-400 text-sm">Email</p>
            <p className="text-white font-medium">matetimaneesha4@gmail.com</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 mb-6">
          <FaLinkedin className="text-pink-400 text-xl" />
          <div className="text-left">
            <p className="text-slate-400 text-sm">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/mateti-maneesha/"
              target="_blank"
              className="text-white font-medium hover:text-pink-400"
            >
              mateti-maneesha
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-pink-400 text-xl" />
          <div className="text-left">
            <p className="text-slate-400 text-sm">GitHub</p>
            <a
              href="https://github.com/Maneesha-sudo/Portfolio"
              target="_blank"
              className="text-white font-medium hover:text-pink-400"
            >
              Maneesha-sudo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
