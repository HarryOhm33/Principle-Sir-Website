import { motion } from "framer-motion";
import { FaLightbulb, FaCertificate, FaFileAlt } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Patents() {
  const { theme } = useTheme();

  const grantedPatents = [
    {
      title: "System and Method for Environmentally Conscious Machining",
      year: "2018",
      description:
        "Innovative approach to reduce environmental impact in machining processes",
      status: "Granted",
    },
    {
      title: "Innovative Machining Process with Sustainable Coolant Use",
      year: "2017",
      description: "Methodology for optimizing coolant usage in manufacturing",
      status: "Granted",
    },
  ];

  const filedPatents = [
    {
      title: "Advanced Coolant Disposal System for Sustainable Manufacturing",
      year: "2020",
      description:
        "System for efficient disposal and recycling of industrial coolants",
      status: "Filed",
    },
    {
      title: "Smart Tool Wear Monitoring Device",
      year: "2019",
      description:
        "Real-time monitoring system for tool wear in machining operations",
      status: "Filed",
    },
    {
      title: "Energy Efficient Hybrid Machining System",
      year: "2021",
      description:
        "Integrated system combining multiple machining processes for energy efficiency",
      status: "Filed",
    },
    {
      title: "Design and Development of Multifunctional Agribot",
      year: "2018",
      description: "Agricultural robot with multiple farming applications",
      status: "Filed (Evaluation in process)",
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
          <FaLightbulb className="mr-3" /> Patents & Intellectual Property
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Granted Patents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaCertificate className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Granted Patents
          </h2>
        </div>

        <div className="space-y-4">
          {grantedPatents.map((patent, index) => (
            <motion.div
              key={`granted-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-xl font-semibold ${theme.text}`}>
                {patent.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span
                  className={`px-2 py-1 rounded mr-3 mb-2 ${theme.secondaryBg} text-xs ${theme.secondaryText}`}
                >
                  {patent.status}
                </span>
                <span className={`${theme.accent} text-sm mb-2`}>
                  {patent.year}
                </span>
              </div>
              <p className={`${theme.text} opacity-90 mt-2`}>
                {patent.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Filed/Published Patents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center mb-6">
          <FaFileAlt className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Filed / Published Patents
          </h2>
        </div>

        <div className="space-y-4">
          {filedPatents.map((patent, index) => (
            <motion.div
              key={`filed-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-xl font-semibold ${theme.text}`}>
                {patent.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span
                  className={`px-2 py-1 rounded mr-3 mb-2 ${theme.secondaryBg} text-xs ${theme.secondaryText}`}
                >
                  {patent.status}
                </span>
                <span className={`${theme.accent} text-sm mb-2`}>
                  {patent.year}
                </span>
              </div>
              <p className={`${theme.text} opacity-90 mt-2`}>
                {patent.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional IP Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className={`mt-12 ${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border}`}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${theme.primary}`}>
          Additional Intellectual Property
        </h2>
        <ul className="space-y-3">
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Multiple innovative projects selected for funding by DST, Govt. of
            India
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            Projects selected under NIDHI PRAYAS by KIET-TBI and TBI-IIM
            Bangalore
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`mr-2 ${theme.secondary}`}>•</span>
            15 innovative ideas developed to prototype stage with
            commercialization potential
          </motion.li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
