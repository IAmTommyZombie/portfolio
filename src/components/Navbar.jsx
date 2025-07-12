import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Thomas Scales - Front End Developer
              </span>
            </NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
