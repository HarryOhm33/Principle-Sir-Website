import { motion } from "framer-motion";
import {
  FaBook,
  FaJournalWhills,
  FaUniversity,
  FaFileAlt,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Publications() {
  const { theme } = useTheme();

  const publications = {
    journals: [
      {
        title:
          "Particle Optimization of CeO2/Water Nanofluids in Flat Plate Solar Collector",
        journal: "International Journal of Engineering and Advanced Technology",
        year: "2019",
        impact: "Indexed",
      },
      {
        title: "Solar Operated Agribot For Green House Farming",
        journal:
          "International Journal of Mechanical and Production Engineering Research and Development",
        year: "2019",
        impact: "UGC Listed",
      },
      {
        title:
          "Hardness measurement of surfaces on hybrid metal matrix composite created by turning",
        journal: "Measurement",
        year: "2019",
        impact: "SCOPUS, Impact Factor: 3.364",
      },
      {
        title:
          "Performance analysis of hybrid nano fluids in flat plate solar collector",
        journal: "Solar Energy",
        year: "2018",
        impact: "Impact factor: 4.608",
      },
    ],
    conferences: [
      {
        title:
          "Thermal Performance Enhancement of Flat-Plate Solar Collector using CeO2-Water Nanofluid",
        conference:
          "International Conference on Efficient Solar Power Generation and Energy Harvesting",
        year: "2019",
        location: "Springer Proceedings",
      },
      {
        title: "SMART Cattle Feeding Machine for Current Agriculture Scenario",
        conference:
          "International Conference on Future Learning Aspects of Mechanical Engineering",
        year: "2020",
        location: "Proceedings",
      },
      {
        title:
          "Study of Water-based Hybrid Solar Photovoltaic Thermal Collector",
        conference:
          "International Conference in Mechanical and Energy Technology",
        year: "2019",
        location: "Springer Proceedings",
      },
    ],
    books: [
      {
        title:
          "Parametric study during abrasive water jet turning of hybrid metal matrix composite",
        publisher: "Lecture Notes in Mechanical Engineering",
        year: "2019",
        doi: "10.1007/978-3-319-99353-9_9",
      },
    ],
  };

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
          <FaBook className="mr-3" /> Publications
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Overview Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} text-center`}
        >
          <FaJournalWhills
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-xl font-semibold ${theme.text}`}>Journals</h3>
          <p className={theme.accent}>20+ International Journals</p>
          <p className={`${theme.text} text-sm mt-2`}>
            SCOPUS, SCIE, ESCI Indexed
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} text-center`}
        >
          <FaUniversity
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-xl font-semibold ${theme.text}`}>Conferences</h3>
          <p className={theme.accent}>15+ International Conferences</p>
          <p className={`${theme.text} text-sm mt-2`}>
            Springer, IEEE Proceedings
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} text-center`}
        >
          <FaFileAlt className={`text-4xl mb-3 mx-auto ${theme.secondary}`} />
          <h3 className={`text-xl font-semibold ${theme.text}`}>
            Books & Chapters
          </h3>
          <p className={theme.accent}>Multiple Contributions</p>
          <p className={`${theme.text} text-sm mt-2`}>
            Published with Springer
          </p>
        </motion.div>
      </motion.div>

      {/* Journal Publications */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaJournalWhills className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Selected Journal Publications
          </h2>
        </div>

        <div className="space-y-4">
          {publications.journals.map((pub, index) => (
            <motion.div
              key={`journal-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span className={`${theme.accent} mr-3`}>{pub.journal}</span>
                <span className={`${theme.accent} text-sm`}>{pub.year}</span>
              </div>
              <p className={`${theme.text} text-sm mt-2`}>{pub.impact}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Conference Publications */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaUniversity className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Selected Conference Papers
          </h2>
        </div>

        <div className="space-y-4">
          {publications.conferences.map((pub, index) => (
            <motion.div
              key={`conf-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span className={`${theme.accent} mr-3`}>{pub.conference}</span>
                <span className={`${theme.accent} text-sm`}>{pub.year}</span>
              </div>
              <p className={`${theme.text} text-sm mt-2`}>{pub.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Book Chapters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center mb-6">
          <FaBook className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Book Chapters
          </h2>
        </div>

        <div className="space-y-4">
          {publications.books.map((pub, index) => (
            <motion.div
              key={`book-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span className={`${theme.accent} mr-3`}>{pub.publisher}</span>
                <span className={`${theme.accent} text-sm`}>{pub.year}</span>
              </div>
              <p className={`${theme.text} text-sm mt-2`}>DOI: {pub.doi}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
