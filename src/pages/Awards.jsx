import { motion } from "framer-motion";
import {
  FaAward,
  FaMedal,
  FaTrophy,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Awards() {
  const { theme } = useTheme();

  const awards = [
    {
      title: "CMI Level 5 Award, UK",
      year: "2021",
      description:
        "Given by Chartered Management, United Kingdom AICTE/UKIERI Leadership & Management Programme International Youth Fellowship (IYF), South Korea for Management and Leadership excellence.",
      contribution: "Management and Leadership",
      icon: <FaMedal className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Global Education Award",
      year: "2019",
      description:
        "Awarded by International Youth Fellowship (IYF), South Korea for outstanding contribution to promote higher education globally.",
      contribution: "Contribution to Promote Higher Education",
      icon: <FaTrophy className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Certificate of Appreciation",
      year: "2021",
      description:
        "Awarded by Rashtriya Shakshik Mahasangh, Uttar Pradesh for exceptional contributions and dedication to the education sector.",
      contribution: "Great Contribution in Education Sector",
      icon: <FaCertificate className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Awarded for Excellence",
      year: "2007",
      description:
        "Recognized by G.L.A. Institute of Technology and Management, Mathura for outstanding performance and excellence in academic contributions.",
      contribution: "Excellence in Academic Performance",
      icon: <FaAward className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Certificate of Appreciation and Recognition",
      year: "2025",
      description:
        "Awarded by UNACCC for demonstrated commitment to advancing Sustainable Development Goals through innovative educational initiatives.",
      contribution: "Commitment to advancing Sustainable development goals",
      icon: <FaCertificate className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "CMI Level 5 Award in Management and Leadership",
      year: "2021",
      description:
        "Completion of the AICTE/UKIERI Leadership & Management Programme, recognizing advanced skills in educational leadership and institutional management.",
      contribution: "Fellow of Academy/Professional Societies",
      icon: <FaGraduationCap className={`text-2xl ${theme.secondary}`} />,
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
          <FaAward className="mr-3" /> Awards & Honors
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border}`}
          >
            <div className="flex items-start mb-4">
              <div
                className={`p-3 rounded-full ${theme.secondaryBg} mr-4 flex-shrink-0`}
              >
                {award.icon}
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${theme.text}`}>
                  {award.title}
                </h3>
                <p className={`${theme.accent} text-sm`}>{award.year}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className={`${theme.text} opacity-90 mb-2`}>
                {award.description}
              </p>
            </div>

            <div className={`${theme.border} border-t pt-3`}>
              <p className={`text-sm ${theme.accent} font-medium`}>
                <span className="font-semibold">Contribution: </span>
                {award.contribution}
              </p>
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
          Other Recognitions & Appointments
        </h2>
        <ul className="space-y-3">
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Appointed as Margdarshak in AICTE for NBA from June 15, 2019
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Appointed as Advisor (India) of International Youth Fellowship (IYF)
            in 2019
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Achieved 4 Star Rank for Institution Innovation Council at Krishna
            Engineering College
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Certificate of Appreciation for contribution in Education Sector by
            Rashtriya Shakshik Mahasangh
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Fellow of Chartered Management Institute (CMI), UK - Level 5 Award
          </motion.li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
