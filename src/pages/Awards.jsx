import { motion } from "framer-motion";
import { FaAward, FaMedal, FaTrophy } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Awards() {
  const { theme } = useTheme();

  const awards = [
    {
      title: "Best Research Paper Award",
      year: "2015",
      description:
        "Awarded at International Conference on Mechanical Engineering for excellence in sustainable machining research",
      icon: <FaMedal className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Excellence in Teaching Award",
      year: "2018",
      description:
        "Recognized by State Technical University for innovative teaching methods and academic leadership",
      icon: <FaTrophy className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Outstanding Contribution in Mechanical Engineering",
      year: "2021",
      description:
        "For advancing research in environmentally conscious machining",
      icon: <FaAward className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Global Education Award",
      year: "2019",
      description:
        "For untiring contribution to promote higher education by International Youth Fellowship (IYF), South Korea",
      icon: <FaMedal className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Corona COVID-19 Fighter Award",
      year: "2020",
      description:
        "By Drop Roball Federation of India for providing help to the public during COVID-19 crisis",
      icon: <FaAward className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Academic Performance Award",
      year: "Multiple Years",
      description:
        "For excellence in academic performance at G.L.A. Institute of Technology and Management, Mathura",
      icon: <FaTrophy className={`text-2xl ${theme.secondary}`} />,
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
            className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border} flex items-start`}
          >
            <div
              className={`p-3 rounded-full ${theme.secondaryBg} mr-4 flex-shrink-0`}
            >
              {award.icon}
            </div>
            <div>
              <h3 className={`text-xl font-semibold ${theme.text}`}>
                {award.title}
              </h3>
              <p className={`${theme.accent} text-sm mb-2`}>{award.year}</p>
              <p className={`${theme.text} opacity-90`}>{award.description}</p>
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
          Other Recognitions
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
        </ul>
      </motion.div>
    </motion.section>
  );
}
