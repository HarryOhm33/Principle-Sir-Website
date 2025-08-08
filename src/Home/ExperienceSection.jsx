import { motion } from "framer-motion";
import { FaBriefcase, FaIndustry } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function ExperienceSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="experience"
    >
      {/* Section Heading */}
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaBriefcase className="mr-3" /> Experience
      </motion.h2>

      {/* Card */}
      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border border-gray-200`}
        whileHover={{ y: -5 }}
      >
        {/* Academic Experience */}
        <motion.h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
          Academic Experience – 25+ Years
        </motion.h3>
        <div className="space-y-4">
          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4`}
            whileHover={{ x: 5 }}
          >
            <h4 className={`font-semibold ${theme.text}`}>
              Principal – Darbhanga College of Engineering
            </h4>
            <p className={`${theme.accent} text-sm`}>
              Nov 2022 – Present | Leading academic & administrative reforms
            </p>
          </motion.div>

          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4`}
            whileHover={{ x: 5 }}
          >
            <h4 className={`font-semibold ${theme.text}`}>
              Director – REC Ambedkar Nagar
            </h4>
            <p className={`${theme.accent} text-sm`}>
              Apr 2021 – Nov 2022 | Achieved NBA accreditation for multiple
              programs
            </p>
          </motion.div>

          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4`}
            whileHover={{ x: 5 }}
          >
            <h4 className={`font-semibold ${theme.text}`}>
              Director – Krishna Engineering College, Ghaziabad
            </h4>
            <p className={`${theme.accent} text-sm`}>
              Jul 2017 – Apr 2021 | Enhanced research output & innovation
              activities
            </p>
          </motion.div>
        </div>

        {/* Industry Experience */}
        <motion.h3
          className={`text-xl font-semibold mt-8 mb-4 ${theme.primary}`}
        >
          Industry Experience – 5 Years
        </motion.h3>
        <div className="space-y-4">
          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4`}
            whileHover={{ x: 5 }}
          >
            <h4 className={`font-semibold ${theme.text}`}>
              Tribhuvan Steel Industries Limited
            </h4>
            <p className={theme.accent}>
              Production Engineer (Apr 1998 – May 2000) – Managed production,
              heat treatment, finishing, inspection, testing & dispatch.
            </p>
          </motion.div>

          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4`}
            whileHover={{ x: 5 }}
          >
            <h4 className={`font-semibold ${theme.text}`}>
              Subhash Project & Marketing Limited
            </h4>
            <p className={theme.accent}>
              Mechanical Engineer (Jan 1994 – May 1996) – Site selection for 6MW
              hydroelectric station, technical collaboration with foreign
              clients.
            </p>
          </motion.div>
        </div>

        {/* Read More Button */}
        <div className="mt-6 text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/experience")}
            className="px-5 py-2 rounded-md bg-blue-700 text-white font-medium shadow hover:bg-blue-800 transition"
          >
            Read More →
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
