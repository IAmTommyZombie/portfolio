import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("All fields are required");
      return;
    }

    emailjs
      .send(
        "service_1ghrfes", // Replace with your EmailJS Service ID
        "template_txhj94h", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        { publicKey: "WM7uhj8CKsOauo9zj" } // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setError("");
        },
        (error) => {
          if (error.text.includes("insufficient authentication scopes")) {
            setError(
              "Email service authentication failed. Please try again later or contact me directly."
            );
          } else if (error.text.includes("Public Key is invalid")) {
            setError("Invalid Public Key. Please contact me directly.");
          } else {
            setError("Failed to send message. Please try again.");
          }
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md mx-auto animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Contact Me
        </h2>
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-semibold transition"
            >
              Send Message
            </motion.button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            Or connect with me:
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
