import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const shortBio = `Dr. Sandeep Tiwari is a renowned academician and researcher in
  Mechanical Engineering with a Ph.D. from Gautam Budh Technical
  University (now Dr. A.P.J. Abdul Kalam Technical University). He has
  contributed immensely to academia, research, and institutional
  leadership over the past 25 years.`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
      id="about"
    >
      {/* Heading */}
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaGraduationCap className="mr-3" /> About
      </motion.h2>

      {/* Card */}
      <motion.div
        className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} border border-gray-200`}
        whileHover={{ y: -5 }}
      >
        {/* Short Bio */}
        <p className={`${theme.text} mb-6 leading-relaxed`}>{shortBio}</p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            className={`${theme.background} p-5 rounded-lg`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`font-semibold text-lg ${theme.primary} mb-3`}>
              Education
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaGraduationCap className={`mt-1 mr-2 ${theme.secondary}`} />
                <span className={theme.text}>
                  <strong>Ph.D. in Mechanical Engineering</strong>
                  <br />
                  Dr. A.P.J. Abdul Kalam Technical University, 2011
                </span>
              </li>
              <li className="flex items-start">
                <FaGraduationCap className={`mt-1 mr-2 ${theme.secondary}`} />
                <span className={theme.text}>
                  <strong>M.E. in Mechanical Engineering</strong>
                  <br />
                  IIT Roorkee, 1998 (First Division)
                </span>
              </li>
              <li className="flex items-start">
                <FaGraduationCap className={`mt-1 mr-2 ${theme.secondary}`} />
                <span className={theme.text}>
                  <strong>B.E. in Mechanical Engineering</strong>
                  <br />
                  Karnataka University, 1993 (First Division)
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Key Positions */}
          <motion.div
            className={`${theme.background} p-5 rounded-lg`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`font-semibold text-lg ${theme.primary} mb-3`}>
              Key Positions
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaBriefcase className={`mt-1 mr-2 ${theme.secondary}`} />
                <span className={theme.text}>
                  Principal, Darbhanga College of Engineering (2022-Present)
                </span>
              </li>
              <li className="flex items-start">
                <FaBriefcase className={`mt-1 mr-2 ${theme.secondary}`} />
                <span className={theme.text}>
                  Director, REC Ambedkar Nagar (2021-2022)
                </span>
              </li>
              <li className="flex items-start">
                <FaBriefcase className={`mt-1 mr-2 ${theme.secondary}`} />
                <span className={theme.text}>
                  Director, Krishna Engineering College (2017-2021)
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Read More Button */}
        <div className="mt-6 text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/about")}
            className="px-5 py-2 rounded-md bg-blue-700 text-white font-medium shadow hover:bg-blue-800 transition"
          >
            Read More →
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
