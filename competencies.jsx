import { motion } from 'framer-motion';

const competencies = [
  {
    title: 'Frontend',
    desc: 'Expertise in React, Next.js, and modern CSS architectures for highly interactive interfaces.',
    icon: '🌐',
  },
  {
    title: 'Backend',
    desc: 'Building scalable APIs with Node.js, Rust, and Go. Database design and optimization.',
    icon: '>_',
  },
  {
    title: 'UI Design',
    desc: 'Crafting beautiful, user-centric designs with Figma before writing a single line of code.',
    icon: '🎨',
  },
  {
    title: 'System Design',
    desc: 'Designing robust architectures that can handle millions of requests with low latency.',
    icon: '⚙️',
  },
];

export default function Competencies() {
  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A diverse toolkit tailored for modern web engineering.
          </p>
          <div className="mt-4 text-right text-gray-500 text-sm">01 — STACK</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-accent transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}