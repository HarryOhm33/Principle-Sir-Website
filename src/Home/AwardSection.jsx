import { motion } from "framer-motion";
import { FaAward, FaMedal, FaStar } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function AwardSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const awards = [
    {
      title: "Best Research Paper Award",
      year: "2015",
      desc: "Awarded at International Conference on Mechanical Engineering for excellence in sustainable machining research.",
    },
    {
      title: "Excellence in Teaching Award",
      year: "2018",
      desc: "Recognized by State Technical University for innovative teaching methods and academic leadership.",
    },
    {
      title: "Outstanding Contribution in Mechanical Engineering",
      year: "2021",
      desc: "For advancing research in environmentally conscious machining.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
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
            whileHover={{ scale: 1.05 }}
            className={`${theme.cardBg} p-6 rounded-lg ${theme.shadow}`}
          >
            <FaMedal className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.text}`}>
              {award.title}
            </h3>
            <p className={`text-sm ${theme.accent}`}>{award.year}</p>
            <p className={`${theme.text} mt-2 text-sm`}>{award.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/awards")}
          className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
        >
          View All Awards →
        </motion.button>
      </div>
    </motion.section>
  );
}
