export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 px-6">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-l  from-yellow-400 to-pink-500
      bg-clip-text text-transparent mb-12">
        Experience
      </h2>
      <p className="text-center text-slate-400 mb-10">
        My professional journey in <span className="text-teal-400">software testing & investigation</span>
      </p>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Amazon */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold  from-pink-300 to bg-red-400
            bg-clip-text text-transparent text-lg">
              Investigation Specialist
            </h3>
            <span className="text-slate-400 text-sm">Jul 2024 – Mar 2025</span>
          </div>
          <p className="text-slate-400 mb-4">
            Amazon Development Centre Pvt. Ltd. – Amazon Flex App
          </p>
          <ul className="space-y-2 list-disc list-inside text-slate-300">
            <li>Investigated live issues reported in the Amazon Flex App and reproduced bugs effectively.</li>
            <li>Documented workflows and collaborated with developers and support teams to resolve verified bugs.</li>
            <li>Ensured minimal disruption to app users by tracking and managing issue resolution efficiently.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">Bug Investigation</span>
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">Workflow Documentation</span>
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">Collaboration</span>
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">Issue Resolution</span>
          </div>
        </div>

        {/* Indium Software */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold bg-gradient-to-r from-pink-400 to bg-red-600
            bg-clip-text text-transparent text-lg">
              Test Associate
            </h3>
            <span className="text-slate-400 text-sm">Nov 2022 – Apr 2024</span>
          </div>
          <p className="text-slate-400 mb-4">
            Indium Software Pvt. Ltd. – Uber Eats App
          </p>
          <ul className="space-y-2 list-disc list-inside text-slate-300">
            <li>Reproduced and validated reported issues, documenting defects with clear steps, screenshots, and recordings.</li>
            <li>Logged and tracked bugs in JIRA, collaborating with developers for quick resolution.</li>
            <li>Identified duplicates and recurring issues using JQL and maintained detailed testing documentation.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">JIRA</span>
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">Bug Tracking</span>
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">Testing Documentation</span>
            <span className="px-2 py-1 text-sm bg-slate-700 rounded-full text-slate-200">Issue Validation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
