import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm Tommy
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
          A UI/UX-focused front-end developer with 3+ years of experience
          crafting intuitive, responsive web applications using React, Tailwind
          CSS, and modern JavaScript
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm passionate about creating visually appealing user interfaces that
          prioritize accessibility and performance. My portfolio showcases
          UI/UX-driven projects deployed on platforms like GitHub Pages. I also
          bring a quality assurance mindset from my experience writing and
          automating tests, ensuring every user experience is both beautiful and
          reliable
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/portfolio/ThomasScalesResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-semibold transition"
          >
            Download Resume
          </a>
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-semibold transition"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
