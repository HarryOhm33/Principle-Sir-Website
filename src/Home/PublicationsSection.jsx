import { motion } from "framer-motion";
import { FaBook, FaJournalWhills, FaUniversity, FaUserGraduate } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function PublicationSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-16"
      id="publications"
    >
      {/* Section Heading */}
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaBook className="mr-3" /> Publications & Research
      </motion.h2>

      {/* Publication Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} text-center`}
        >
          <FaJournalWhills
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-lg font-semibold ${theme.text}`}>Journals</h3>
          <p className={`text-2xl font-bold ${theme.primary} my-1`}>25+ Papers</p>
          <p className={`${theme.accent} text-xs`}>SCOPUS, SCIE & Elsevier indexed</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} text-center`}
        >
          <FaUniversity
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-lg font-semibold ${theme.text}`}>Conferences & Books</h3>
          <p className={`text-2xl font-bold ${theme.primary} my-1`}>20+ Works</p>
          <p className={`${theme.accent} text-xs`}>15+ Int./Nat. Conferences, 4 Book Chapters</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} text-center`}
        >
          <FaUserGraduate className={`text-4xl mb-3 mx-auto ${theme.secondary}`} />
          <h3 className={`text-lg font-semibold ${theme.text}`}>Ph.D. Supervision</h3>
          <p className={`text-2xl font-bold ${theme.primary} my-1`}>5 Scholars</p>
          <p className={`${theme.accent} text-xs`}>Supervised & Awarded | H-Index of 7</p>
        </motion.div>
      </div>

      {/* Featured Publications */}
      <motion.div
        className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border}`}
        whileHover={{ y: -5 }}
      >
        <h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
          Featured Publications & Highlights
        </h3>

        <ul className="space-y-4">
          <motion.li
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background} border ${theme.border}`}
          >
            <p className={`${theme.text} font-medium`}>
              Performance analysis of hybrid nanofluids in flat plate solar collector as an advanced working fluid
            </p>
            <p className={`${theme.accent} text-xs mt-1`}>
              Solar Energy (Elsevier), Vol. 167, pp. 231–241, 2018 [SCOPUS Indexed, Impact Factor: 4.608]
            </p>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background} border ${theme.border}`}
          >
            <p className={`${theme.text} font-medium`}>
              Hardness measurement of surfaces on hybrid metal matrix composite created by turning using an abrasive water jet and WED
            </p>
            <p className={`${theme.accent} text-xs mt-1`}>
              Measurement (Elsevier), Vol. 131, pp. 628–639, 2019 [SCOPUS Indexed, Impact Factor: 3.364]
            </p>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-lg border-l-4 ${theme.secondary} ${theme.background} border ${theme.border}`}
          >
            <p className={`${theme.text} font-medium`}>
              Surface integrity in tangential turning of hybrid MMC A359/B4C/Al2O3 by abrasive waterjet
            </p>
            <p className={`${theme.accent} text-xs mt-1`}>
              Journal of Manufacturing Processes, Vol. 28, pp. 11–20, 2017 [SCOPUS Indexed]
            </p>
          </motion.li>
        </ul>

        {/* Read More Button */}
        <div className="mt-6 text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/publications")}
            className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
          >
            View All Publications & Scholars →
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
