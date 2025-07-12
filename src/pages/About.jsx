import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "UI/UX Design", category: "Design" },
    { name: "Responsive Design", category: "Design" },
    { name: "Vite", category: "Tools" },
    { name: "MongoDB", category: "Backend" },
    { name: "Node.js", category: "Backend" },
  ];

  const categories = [
    { name: "Frontend", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Design", icon: "M12 4v16m8-8H4" },
    { name: "Tools", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { name: "Backend", icon: "M5 12h14M12 5v14" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm a passionate front-end developer with a focus on creating
          intuitive and visually appealing user interfaces. My work emphasizes
          clean design, accessibility, and performance, using modern tools like
          React and Tailwind CSS. I have experience building full-stack
          applications and deploying them to platforms like GitHub Pages.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-semibold transition mb-8"
        >
          Download Resume
        </a>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          My Skills
        </h3>
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={category.icon}
                  />
                </svg>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  {category.name}
                </h4>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                role="list"
                aria-label={`${category.name} skills`}
              >
                {skills
                  .filter((skill) => skill.category === category.name)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm px-4 py-2 text-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900 transition"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
