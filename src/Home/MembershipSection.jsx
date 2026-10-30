import { motion } from "framer-motion";
import { FaUsers, FaGlobe, FaGraduationCap, FaAward } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function MembershipSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const memberships = [
    {
      org: "International Youth Fellowship (IYF), South Korea",
      status: "Advisor (India) & Life Member",
      id: "Appointed 19 Dec 2019",
      icon: <FaGlobe className={`text-3xl mb-3 ${theme.secondary}`} />,
    },
    {
      org: "Institution of Engineers (India)",
      status: "Life Member",
      id: "ID: M-54321",
      icon: <FaGraduationCap className={`text-3xl mb-3 ${theme.secondary}`} />,
    },
    {
      org: "India Didactics Association",
      status: "Member – Higher Education Leaders",
      id: "National Community",
      icon: <FaUsers className={`text-3xl mb-3 ${theme.secondary}`} />,
    },
    {
      org: "AICTE Margdarshak for NBA",
      status: "Margdarshak Mentor",
      id: "From 15 June 2019",
      icon: <FaAward className={`text-3xl mb-3 ${theme.secondary}`} />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-16"
      id="memberships"
    >
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaUsers className="mr-3" /> Professional Memberships & Advisory
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {memberships.map((m, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} flex flex-col items-center text-center justify-between`}
          >
            <div>
              {m.icon}
              <h3 className={`font-semibold text-base ${theme.text}`}>{m.org}</h3>
              <p className={`${theme.secondaryText} text-xs font-medium mt-1`}>{m.status}</p>
            </div>
            <p className={`${theme.accent} text-xs mt-3 pt-2 border-t ${theme.border} w-full`}>{m.id}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/memberships")}
          className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
        >
          View All Memberships & Editorial Roles →
        </motion.button>
      </div>
    </motion.section>
  );
}
