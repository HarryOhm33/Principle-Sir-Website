import { motion } from "framer-motion";
import { FaUsers, FaIdCard, FaGraduationCap, FaBook } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Memberships() {
  const { theme } = useTheme();

  const memberships = [
    {
      title: "Life Member",
      organization: "Indian Society for Technical Education (ISTE)",
      id: "LM-12345",
      icon: <FaUsers className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Life Member",
      organization: "SAE India",
      id: "LM-67890",
      icon: <FaIdCard className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Member",
      organization: "Institution of Engineers (India)",
      id: "M-54321",
      icon: <FaGraduationCap className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Reviewer",
      organization: "International Journals in Mechanical Engineering",
      id: "",
      icon: <FaBook className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Life Member",
      organization: "International Youth Fellowship (IYF), South Korea",
      id: "",
      icon: <FaUsers className={`text-2xl ${theme.secondary}`} />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h1
          className={`text-4xl font-bold mb-2 ${theme.primary} flex items-center`}
        >
          <FaUsers className="mr-3" /> Professional Memberships
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {memberships.map((membership, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border} flex items-start`}
          >
            <div
              className={`p-3 rounded-full ${theme.secondaryBg} mr-4 flex-shrink-0`}
            >
              {membership.icon}
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {membership.title}
              </h3>
              <p className={`${theme.text} mb-1`}>{membership.organization}</p>
              {membership.id && (
                <p className={`${theme.accent} text-sm`}>ID: {membership.id}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className={`mt-12 ${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border}`}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${theme.primary}`}>
          Editorial & Review Activities
        </h2>
        <ul className="space-y-3">
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Reviewer for multiple international journals in Mechanical
            Engineering
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Technical committee member for several international conferences
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Editorial board member for journals in mechanical and materials
            engineering
          </motion.li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
