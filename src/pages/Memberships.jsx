import { motion } from "framer-motion";
import {
  FaUsers,
  FaIdCard,
  FaGraduationCap,
  FaBook,
  FaGlobe,
  FaAward,
  FaLeaf,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import BackButton from "../components/BackButton";

export default function Memberships() {
  const { theme } = useTheme();

  const memberships = [
    {
      title: "Advisor (India) & Life Member",
      organization: "International Youth Fellowship (IYF), South Korea",
      details: "Appointed Advisor (India) on 19 December 2019; Life Member. IYF operates in 92 countries.",
      id: "Appointed 19 Dec 2019",
      icon: <FaGlobe className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Member",
      organization: "India Didactics Association",
      details: "Higher Education Leaders Community, contributing to curriculum advancement and pedagogic leadership.",
      id: "Higher Education Leaders Community",
      icon: <FaUsers className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Life Member",
      organization: "Institution of Engineers (India)",
      details: "Fellow/Life member of India's apex professional body of engineers.",
      id: "M-54321",
      icon: <FaGraduationCap className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Margdarshak",
      organization: "All India Council for Technical Education (AICTE)",
      details: "Appointed Margdarshak from 15 June 2019 to guide institutions for National Board of Accreditation (NBA).",
      id: "NBA Margdarshak (2019)",
      icon: <FaAward className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Life Member",
      organization: "Indian Society for Technical Education (ISTE)",
      details: "National professional non-profit making society for the technical education system in India.",
      id: "LM-12345",
      icon: <FaIdCard className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Life Member",
      organization: "SAE India (Society of Automotive Engineers)",
      details: "Active engagement in automotive engineering, student design competitions, and mobility tech.",
      id: "LM-67890",
      icon: <FaIdCard className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Member",
      organization: "UNAccc (Unity of Nations Action for Climate Change Council)",
      details: "Commitment to advancing Sustainable Development Goals (SDGs) and green manufacturing.",
      id: "Appointed 2025",
      icon: <FaLeaf className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Reviewer & Editorial Contributor",
      organization: "International Journals in Mechanical Engineering",
      details: "Peer reviewer for international peer-reviewed journals across additive manufacturing and fluid dynamics.",
      id: "Peer Reviewer",
      icon: <FaBook className={`text-2xl ${theme.secondary}`} />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-6 sm:py-10 md:py-12"
    >
      <BackButton />

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8 md:mb-12"
      >
        <h1
          className={`text-4xl font-bold mb-2 ${theme.primary} flex items-center`}
        >
          <FaUsers className="mr-3" /> Professional Memberships & Advisory Bodies
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {memberships.map((membership, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index }}
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border flex items-start`}
          >
            <div
              className={`p-3 rounded-full ${theme.secondaryBg} mr-4 flex-shrink-0`}
            >
              {membership.icon}
            </div>
            <div>
              <span className={`text-xs font-semibold ${theme.secondaryText} uppercase tracking-wider`}>
                {membership.title}
              </span>
              <h3 className={`text-lg font-bold ${theme.text} mt-0.5 mb-1`}>
                {membership.organization}
              </h3>
              <p className={`text-xs ${theme.accent} leading-relaxed mb-2`}>
                {membership.details}
              </p>
              {membership.id && (
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${theme.background} border ${theme.border} ${theme.primary}`}>
                  {membership.id}
                </span>
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
        className={`mt-8 sm:mt-12 ${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${theme.primary}`}>
          Editorial & Academic Review Activities
        </h2>
        <ul className="space-y-3 text-sm">
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-2 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>Reviewer for Multiple International Journals</strong>: Regularly evaluating manuscripts for leading Elsevier, Springer, and Scopus-indexed mechanical and materials science journals.
            </span>
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-2 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>Technical Committee Member</strong>: Serving on advisory and technical review committees for multiple IEEE, Springer, and national engineering conferences.
            </span>
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-2 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>Editorial Board Member</strong>: Contributing editorial guidance for specialized journals focusing on advanced manufacturing, composite materials, and green engineering.
            </span>
          </motion.li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
