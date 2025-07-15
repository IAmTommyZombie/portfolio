export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <a
            href="https://github.com/IAmTommyZombie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/thomasscales"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:ThomasScales1@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              ThomasScales1@gmail.com
            </a>
          </p>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-xs mt-4">
          &copy; {new Date().getFullYear()} Thomas Scales. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
