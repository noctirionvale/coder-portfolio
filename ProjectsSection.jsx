import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Reply Guy Token',
    subtitle: 'Community-driven crypto token',
    description: 'A community-driven crypto token designed to incentivize and gamify social media engagement, rewarding users for meaningful replies and online interaction.',
    tags: ['Blockchain', 'Community', 'Gamification'],
    image: 'https://placehold.co/600x400/0f172a/64748b?text=REPLYGUYTOKEN',
    link: 'https://replyguytoken.site/',
  },
  {
    title: 'vAIbes',
    subtitle: 'AI Resource Hub',
    description: 'A central resource hub and digital magazine for navigating the AI ecosystem. It aggregates essential tools—from top LLMs to fact-checking resources—providing a structured environment for users to explore and compare artificial intelligence technologies safely.',
    tags: ['React', 'Content Aggregation', 'AI Tools'],
    image: 'https://placehold.co/600x400/0f172a/64748b?text=vAIbes',
    link: 'https://noctirionvale.github.io/vAIbes/',  
  },
  {
    title: 'PageForge',
    subtitle: 'Crypto Web Assets Marketplace',
    description: 'An e-commerce platform for crypto-native web assets. This project focuses on delivering optimized, responsive templates that help users rapidly establish a professional presence for new token projects.',
    tags: ['E-commerce', 'Web Templates', 'Crypto'],
    image: 'https://placehold.co/600x400/0f172a/64748b?text=PAGEFORGE',
    link: 'https://example.com/pageforge', // Replace with your actual link when available
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Featured projects that push the boundaries of digital experiences.
          </p>
          <div className="mt-4 text-right text-gray-500 text-sm">02 — PROJECTS</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-accent transition"
            >
              {/* Link wrapping the entire card content area */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-gray-400 mb-2 text-sm">{proj.subtitle}</p> {/* Added text-sm for subtitle */}
                  <p className="text-gray-300 mb-4 text-sm">{proj.description}</p> {/* Added description paragraph */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-gray-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
              {/* Overlay with button - also linked */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-5"
              >
                <button className="bg-accent text-primary px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 transition">
                  View Project →
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}