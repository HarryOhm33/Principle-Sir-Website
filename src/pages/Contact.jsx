import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useState } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope className={`text-xl ${theme.secondary}`} />,
      label: "Email",
      value: "sandeeptiwari1970@gmail.com",
      link: "mailto:sandeeptiwari1970@gmail.com",
    },
    {
      icon: <FaPhone className={`text-xl ${theme.secondary}`} />,
      label: "Phone",
      value: "+91 9891460727 / 9415427948",
      link: "tel:+919891460727",
    },
    {
      icon: <FaMapMarkerAlt className={`text-xl ${theme.secondary}`} />,
      label: "Address",
      value: "CPC-001, Omaxe Palm Green Society, Sector MU, Greater Noida",
      link: "https://goo.gl/maps/example",
    },
    {
      icon: <FaLinkedin className={`text-xl ${theme.secondary}`} />,
      label: "LinkedIn",
      value: "Dr. Sandeep Tiwari",
      link: "https://www.linkedin.com/in/dr-sandeep-tiwari-7a186029",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 text-center"
      >
        <h1 className={`text-4xl font-bold mb-2 ${theme.primary}`}>
          Get in Touch
        </h1>
        <p className={`${theme.accent} max-w-2xl mx-auto`}>
          Feel free to reach out for collaborations, academic queries, or
          appointments. I typically respond within 24-48 hours.
        </p>
        <div className={`h-1 w-20 mx-auto mt-3 ${theme.primary}`}></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start"
              whileHover={{ y: -3 }}
            >
              <div
                className={`p-3 rounded-full ${theme.cardBg} ${theme.shadow} mr-4 flex-shrink-0`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-1`}>
                  {item.label}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.primary} hover:underline transition-colors duration-200`}
                >
                  {item.value}
                </a>
              </div>
            </motion.div>
          ))}

          {/* Availability */}
          <motion.div
            className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border} border`}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center mb-4">
              <FaClock className={`text-xl mr-3 ${theme.secondary}`} />
              <h2 className={`text-xl font-semibold ${theme.primary}`}>
                Availability
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaCalendarAlt className={`mt-1 mr-3 ${theme.accent}`} />
                <div>
                  <p className={`font-medium ${theme.text}`}>Office Hours:</p>
                  <p className={theme.text}>
                    Monday - Friday, 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className={`mt-1 mr-3 ${theme.accent}`} />
                <div>
                  <p className={`font-medium ${theme.text}`}>
                    Preferred Contact:
                  </p>
                  <p className={theme.text}>Email or scheduled appointment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`${theme.cardBg} p-8 rounded-xl ${theme.shadow} ${theme.border} border`}
        >
          <h2 className={`text-2xl font-semibold mb-6 ${theme.primary}`}>
            Send a Message
          </h2>

          {submitSuccess && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`mb-6 p-4 rounded-lg ${theme.button} text-center`}
            >
              <p className="font-medium">
                Thank you! Your message has been sent successfully.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 ${theme.text}`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme.border
                } ${theme.background} ${
                  theme.text
                } focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${theme.primary.replace(
                  "text",
                  "focus:ring"
                )}`}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${theme.text}`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme.border
                } ${theme.background} ${
                  theme.text
                } focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${theme.primary.replace(
                  "text",
                  "focus:ring"
                )}`}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${theme.text}`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme.border
                } ${theme.background} ${
                  theme.text
                } focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${theme.primary.replace(
                  "text",
                  "focus:ring"
                )}`}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-medium ${theme.button} ${theme.buttonHover} transition-colors duration-200 flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>

          <p className={`mt-4 text-sm ${theme.accent} text-center`}>
            I'll respond to your message as soon as possible.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
