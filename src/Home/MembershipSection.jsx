import { motion } from "framer-motion";
import { FaUsers, FaIdBadge, FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function MembershipSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const memberships = [
    {
      org: "ISTE (Indian Society for Technical Education)",
      status: "Life Member",
      id: "LM-12345",
    },
    {
      org: "SAE India",
      status: "Life Member",
      id: "LM-67890",
    },
    {
      org: "Institution of Engineers (India)",
      status: "Member",
      id: "M-54321",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="memberships"
    >
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaUsers className="mr-3" /> Professional Memberships
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {memberships.map((m, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} flex flex-col items-center text-center`}
          >
            <FaIdBadge className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.text}`}>{m.org}</h3>
            <p className={`${theme.accent} text-sm`}>{m.status}</p>
            <p className={`${theme.text} text-xs mt-1`}>ID: {m.id}</p>
            <FaCheckCircle className={`mt-2 ${theme.secondary}`} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/memberships")}
          className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
        >
          View All Memberships →
        </motion.button>
      </div>
    </motion.section>
  );
}
