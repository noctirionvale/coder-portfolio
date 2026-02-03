import { motion } from "framer-motion";

export default function AboutMeSection() {
  const currentProjects = [
    {
      name: "ReplyGuy Token",
      icon: "🪙",
      description:
        "An experimental crypto-social project exploring how incentives can shape online engagement and community behavior."
    },
    {
      name: "Vaibes",
      icon: "🌐",
      description:
        "A culture-driven web concept focused on internet sentiment, identity, and digital expression."
    },
    {
      name: "PageForge",
      icon: "⚒️",
      description:
        "A lightweight web tool for rapidly creating and deploying simple, functional landing pages."
    }
  ];

  const learningAreas = [
    "Frontend & backend architecture",
    "Modern JavaScript systems and tooling",
    "Designing usable and honest interfaces",
    "How to build things people actually care about 😄"
  ];

  return (
    <section
      id="about"
      className="py-20 px-4"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I build small, experimental web projects focused on clarity,
            usability, and responsible technology. Right now, I’m exploring
            how code, culture, and incentives intersect on the modern web.
          </p>
          <div className="mt-4 text-right text-gray-400 text-sm">
            03 — ABOUT
          </div>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-16 rounded-full"
        />

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-cyan-400 col-span-2 mb-6">
            🚀 Current Projects
          </h3>

          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-start">
                <span className="text-3xl mr-4">{project.icon}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    {project.name}
                  </h4>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">
            🛠️ Learning & Focus
          </h3>
          <ul className="space-y-4">
            {learningAreas.map((area, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start"
              >
                <span className="text-cyan-400 mr-3">▹</span>
                <span className="text-gray-200">{area}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-cyan-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/20"
          >
            Let’s Build Something
          </a>
        </motion.div>
      </div>
    </section>
  );
}
