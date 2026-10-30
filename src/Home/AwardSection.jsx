import { motion } from "framer-motion";
import { FaAward, FaMedal, FaTrophy, FaCertificate } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function AwardSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const awards = [
    {
      title: "CMI Level 5 Award, UK",
      year: "2021",
      desc: "Chartered Management Institute, UK & AICTE/UKIERI Technical Leadership & Management Programme for institutional administration.",
      icon: <FaMedal className={`text-3xl mb-3 ${theme.secondary}`} />,
    },
    {
      title: "Global Education Award",
      year: "2019",
      desc: "Awarded by International Youth Fellowship (IYF), South Korea, for outstanding contributions to promoting higher education globally.",
      icon: <FaTrophy className={`text-3xl mb-3 ${theme.secondary}`} />,
    },
    {
      title: "UNAccc Recognition & Membership",
      year: "2025",
      desc: "Awarded by Unity of Nations Action for Climate Change Council for advancing educational and sustainable technological initiatives.",
      icon: <FaCertificate className={`text-3xl mb-3 ${theme.secondary}`} />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-16"
      id="awards"
    >
      <motion.h2
        className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
      >
        <FaAward className="mr-3" /> Awards & Honors
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow} border ${theme.border} flex flex-col justify-between`}
          >
            <div>
              {award.icon}
              <h3 className={`font-semibold text-lg ${theme.text}`}>
                {award.title}
              </h3>
              <p className={`text-xs font-semibold ${theme.secondaryText} mt-1 mb-2`}>{award.year}</p>
              <p className={`${theme.accent} text-sm leading-relaxed`}>{award.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/awards")}
          className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
        >
          View All Awards & References →
        </motion.button>
      </div>
    </motion.section>
  );
}
