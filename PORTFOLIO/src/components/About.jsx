import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto text-white">
      
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>

        <p className="text-slate-400 mt-4">
          Get to know the person behind the <span className="text-pink-400">code</span>
        </p>
      </div>

      {/* Content Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-slate-400 leading-relaxed mb-6 text-2xl">
            I'm a passionate frontend developer with hands-on experience 
            building responsive and scalable web applications using 
            React.js, JavaScript, and Tailwind CSS.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6 text-2xl">
            With 2 years of experience working on large-scale applications 
            like Amazon Flex and Uber Eats, I bring a quality-focused mindset, 
            strong debugging skills, and deep understanding of user behavior.
          </p>

          <p className="text-slate-400 leading-relaxed text-2xl">
            My goal is to bridge the gap between design and development, 
            creating seamless user experiences that are visually stunning 
            and highly functional.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Profile"
className="rounded-2xl shadow-2xl border border-slate-700 
             w-80 md:w-96 h-160 object-cover"            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl border border-violet-500/30 blur-sm"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
