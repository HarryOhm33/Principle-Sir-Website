import { motion } from "framer-motion";
import { FaAward, FaMedal, FaStar } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function AwardSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const awards = [
    {
      title: "CMI Level 5 Award, UK",
      year: "2021",
      desc: "Given by Chartered Management, United Kingdom AICTE/UKIERI Leadership & Management Programme International Youth Fellowship (IYF), South Korea.",
    },
    {
      title: "Global Education Award",
      year: "2019",
      desc: "Awarded by International Youth Fellowship (IYF), South Korea for contribution to Promote Higher Education.",
    },
    {
      title: "Certificate of Appreciation",
      year: "2021",
      desc: "Rashtriya Shakshik Mahasangh, Uttar Pradesh for Great Contribution in Education Sector.",
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
