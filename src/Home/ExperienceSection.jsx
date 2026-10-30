import { motion } from "framer-motion";
import { FaBriefcase, FaIndustry, FaUniversity } from "react-icons/fa";
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
      className="mb-10 sm:mb-16"
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
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} ${theme.border} border`}
        whileHover={{ y: -5 }}
      >
        {/* Academic Experience */}
        <div className="flex items-center justify-between mb-4">
          <motion.h3 className={`text-xl font-semibold ${theme.primary} flex items-center`}>
            <FaUniversity className="mr-2" /> Academic Leadership – 30+ Years
          </motion.h3>
          <span className={`text-xs ${theme.accent} font-medium hidden sm:inline`}>
            More than a decade as Director / Principal
          </span>
        </div>

        <div className="space-y-4">
          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4 ${theme.background} p-3 rounded border ${theme.border}`}
            whileHover={{ x: 5 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h4 className={`font-semibold ${theme.text}`}>
                Principal (Deputation: Director, Science City & Innovation Hub, Bodh Gaya)
              </h4>
              <span className={`text-xs font-semibold ${theme.secondaryText} mt-1 sm:mt-0`}>
                Dec 2025 – Present
              </span>
            </div>
            <p className={`${theme.accent} text-sm mt-1`}>
              Government Engineering College, Sheikhpura | DSTTE, Government of Bihar
            </p>
          </motion.div>

          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4 ${theme.background} p-3 rounded border ${theme.border}`}
            whileHover={{ x: 5 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h4 className={`font-semibold ${theme.text}`}>
                Principal – Darbhanga College of Engineering
              </h4>
              <span className={`text-xs ${theme.accent} mt-1 sm:mt-0`}>
                Nov 2022 – Dec 2025
              </span>
            </div>
            <p className={`${theme.accent} text-sm mt-1`}>
              Established ₹6 Cr C-DAC 3D Printing Finishing School, MIITIE incubation centre, and signed 16 MoUs.
            </p>
          </motion.div>

          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4 ${theme.background} p-3 rounded border ${theme.border}`}
            whileHover={{ x: 5 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h4 className={`font-semibold ${theme.text}`}>
                Director – Rajkiya Engineering College, Ambedkar Nagar
              </h4>
              <span className={`text-xs ${theme.accent} mt-1 sm:mt-0`}>
                Apr 2021 – Nov 2022
              </span>
            </div>
            <p className={`${theme.accent} text-sm mt-1`}>
              Led ₹2.89 Cr IoT and drone agriculture monitoring project; achieved NBA accreditation.
            </p>
          </motion.div>

          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4 ${theme.background} p-3 rounded border ${theme.border}`}
            whileHover={{ x: 5 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h4 className={`font-semibold ${theme.text}`}>
                Director – Krishna Engineering College, Ghaziabad
              </h4>
              <span className={`text-xs ${theme.accent} mt-1 sm:mt-0`}>
                Jul 2017 – Apr 2021
              </span>
            </div>
            <p className={`${theme.accent} text-sm mt-1`}>
              Secured ₹1.18+ Cr funding, 4-Star rating for Institution Innovation Council, AIR 271 in Internship Day.
            </p>
          </motion.div>
        </div>

        {/* Industry Experience */}
        <motion.h3
          className={`text-xl font-semibold mt-8 mb-4 ${theme.primary} flex items-center`}
        >
          <FaIndustry className="mr-2" /> Industry & Consulting Experience – 5+ Years
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4 ${theme.background} p-3 rounded border ${theme.border}`}
            whileHover={{ x: 5 }}
          >
            <h4 className={`font-semibold ${theme.text}`}>
              Tribhuvan Steel Industries Ltd.
            </h4>
            <p className={`${theme.accent} text-xs mt-1`}>
              Production Engineer (Apr 1998 – May 2000) – Managed production, heat treatment, inspection, testing & dispatch.
            </p>
          </motion.div>

          <motion.div
            className={`border-l-4 ${theme.secondary} pl-4 ${theme.background} p-3 rounded border ${theme.border}`}
            whileHover={{ x: 5 }}
          >
            <h4 className={`font-semibold ${theme.text}`}>
              Subhash Project & Marketing Ltd.
            </h4>
            <p className={`${theme.accent} text-xs mt-1`}>
              Mechanical Engineer (Jan 1994 – May 1996) – Site selection for 6 MW hydroelectric stations at Chamoli.
            </p>
          </motion.div>
        </div>

        {/* Read More Button */}
        <div className="mt-6 text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/experience")}
            className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
          >
            Read More →
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
