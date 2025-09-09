import { motion } from "framer-motion";
import { FaTrophy, FaFlask, FaBriefcase } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function AchievementSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const researchProjects = [
    {
      title: "Finishing School of 3D Printing and Additive Manufacturing",
      fundingAgency: "CDAC, MEITY, Govt. Of India",
      position: "Principal Investigator (PI)",
      duration: "2025 - 2030",
      amount: "Approx. 6 Crores",
    },
    {
      title: "IoT & Drone based Agriculture Monitoring System",
      fundingAgency: "MMMUT, Gorakhpur",
      position: "Co-Principal Investigator",
      duration: "2020 - 2022",
    },
  ];

  const leadershipRoles = [
    {
      institution: "Krishna Engineering College, Ghaziabad",
      position: "Director",
      period: "2017 - 2021",
      achievement: "Secured funding of ₹1.18+ Crores during tenure",
    },
    {
      institution: "DCE Darbhanga",
      position: "Principal",
      period: "2022 - Present",
      achievement: "Established 3D Printing Finishing School (6 Cr. Project)",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-12"
      id="achievements"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2
          className={`text-3xl font-bold ${theme.primary} flex items-center mb-6`}
        >
          <FaTrophy className="mr-3" /> Key Achievements
        </h2>
      </motion.div>

      {/* Research Projects Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex items-center mb-4">
          <FaFlask className={`text-2xl mr-3 ${theme.secondary}`} />
          <h3 className={`text-xl font-semibold ${theme.primary}`}>
            Research Projects
          </h3>
        </div>

        <div className="space-y-4">
          {researchProjects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`${theme.cardBg} p-4 rounded-lg ${theme.shadow}`}
            >
              <h4 className={`font-semibold ${theme.text} mb-2`}>
                {project.title}
              </h4>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className={theme.accent}>{project.fundingAgency}</span>
                <span className={theme.accent}>•</span>
                <span className={theme.accent}>{project.position}</span>
                <span className={theme.accent}>•</span>
                <span className={theme.accent}>{project.duration}</span>
              </div>
              {project.amount && (
                <p className={`text-sm ${theme.text} mt-2`}>
                  <span className="font-medium">Funding: </span>
                  {project.amount}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership Roles Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <div className="flex items-center mb-4">
          <FaBriefcase className={`text-2xl mr-3 ${theme.secondary}`} />
          <h3 className={`text-xl font-semibold ${theme.primary}`}>
            Leadership Roles
          </h3>
        </div>

        <div className="space-y-4">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={`role-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`${theme.cardBg} p-4 rounded-lg ${theme.shadow}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className={`font-semibold ${theme.text}`}>
                  {role.institution}
                </h4>
                <span className={`text-sm ${theme.accent} mt-1 sm:mt-0`}>
                  {role.period}
                </span>
              </div>
              <p className={`text-sm ${theme.accent} mb-2`}>{role.position}</p>
              <p className={`text-sm ${theme.text}`}>{role.achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View More Details Button */}
      <div className="mt-6 text-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/achievements")}
          className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
        >
          View More Details →
        </motion.button>
      </div>
    </motion.section>
  );
}
