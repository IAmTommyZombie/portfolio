import { motion } from "framer-motion";
import saasy from "../assets/sassy.png";
import dashboard from "../assets/dashboard.png";
import jobboard from "../assets/jobboard.png";
import musicStore from "../assets/musicStore.png";
import haircut from "../assets/haircut.png";

export default function Projects() {
  const projects = [
    {
      title: "Team Management Dashboard",
      description:
        "A responsive dashboard for managing team members with features like user addition, editing, deletion, filtering, and role/status visualization using pie charts.",
      skills: ["React", "Tailwind CSS", "Tanstack Table", "Chart.js"],
      link: "https://iamtommyzombie.github.io/team-dashboard/",
      image: dashboard,
    },
    {
      title: "Job Posting Board",
      description:
        "A platform for browsing and posting job listings, designed with a focus on clean UI and user-friendly navigation.",
      skills: ["React", "Tailwind CSS"],
      link: "https://iamtommyzombie.github.io/job-board-ui",
      image: jobboard,
    },
    {
      title: "SaaSy",
      description: "A placeholder for upcoming UI/UX projects to be added.",
      skills: ["TBD"],
      link: "https://iamtommyzombie.github.io/saas-landing-page/",
      image: saasy,
    },
    {
      title: "Haircut Booking",
      description: "A placeholder for upcoming UI/UX projects to be added.",
      skills: ["TBD"],
      link: "https://iamtommyzombie.github.io/haircut-booking/",
      image: haircut,
    },
    {
      title: "Music Store",
      description: "A placeholder for upcoming UI/UX projects to be added.",
      skills: ["TBD"],
      link: "https://iamtommyzombie.github.io/music-store/",
      image: musicStore,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const skillContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-fade-in">
          My Projects
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 animate-fade-in"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 pointer-events-none rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition duration-300 rounded-t-lg" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <motion.div
                  variants={skillContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2 mb-4"
                  role="list"
                  aria-label={`Skills for ${project.title}`}
                ></motion.div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-semibold transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
