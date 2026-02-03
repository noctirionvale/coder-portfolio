import { useState } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's build something extraordinary.</h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you have a specific project in mind or just want to chat about tech, my inbox is always open.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                <FiMail /> SEND MESSAGE
              </button>
              <div className="flex gap-3">
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                  <FiGithub size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                  <FiTwitter size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" // Fixed: focus:ring-2 instead of focusring-2
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="PROJECT DETAILS"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition"
            >
              INITIATE_HANDSHAKE
            </button>
            {submitted && (
              <p className="text-success text-center mt-2">Message sent! 🙌</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}