import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            AVAILABLE FOR FREELANCE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Engineering <br />
          <span className="text-gray-400">Digital Excellence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          I bridge the gap between complex logic and stunning aesthetics. A creative developer dedicated to building high-performance web applications.
        </motion.p>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-2xl mx-auto bg-secondary rounded-xl overflow-hidden border border-gray-700"
        >
          <div className="flex items-center px-4 py-2 bg-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-gray-400 text-sm font-mono">portfolio.ts</span>
          </div>
          <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto bg-black/30">
{`const developer = {
  name: 'Noctirion Vale',
  role: 'Full Stack Engineer',
  skills: ['React', 'Node', 'Rust', 'Design'],
  passion: 'Building elegant solutions',
  status: 'Open for collaborations'
};

function initPortfolio() {
  render(developer);
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}