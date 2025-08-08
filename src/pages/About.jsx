import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie, FaUniversity } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 py-12"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`text-4xl font-bold mb-8 ${theme.primary} flex items-center`}
      >
        <FaGraduationCap className="mr-3" /> About
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`${theme.text} leading-relaxed mb-8`}
      >
        Prof. (Dr.) Sandeep Tiwari is a distinguished academic leader,
        researcher, and mentor in the field of Mechanical Engineering. With a
        career spanning over 25 years in academia, 16 years in research, and 5
        years in industry, he has held leadership positions including Principal,
        Director, Dean, and Advisor in various prestigious institutions. His
        expertise covers both academic administration and cutting-edge research
        in engineering.
      </motion.p>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {/* Ph.D. */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.background} p-6 rounded-lg ${theme.shadow} border border-gray-200`}
        >
          <FaGraduationCap className={`text-3xl mb-3 ${theme.secondary}`} />
          <h2 className={`font-semibold text-lg ${theme.primary} mb-2`}>
            Doctorate in Philosophy (Ph.D.) – Mechanical Engineering
          </h2>
          <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
            <p>
              <strong>Awarded in:</strong> 2011
            </p>
            <p>
              <strong>University:</strong> Gautam Budh Technical University,
              Lucknow (Now Dr. A.P.J. Abdul Kalam Technical University, Uttar
              Pradesh, Lucknow)
            </p>
            <p>
              <strong>Research Place:</strong> Indian Institute of
              Technology-BHU, Varanasi, Uttar Pradesh, India (2004-2008)
            </p>
            <p>
              <strong>Title:</strong> Strategic Approach for Environmentally
              Conscious Traditional Machining by Effective Coolant Disposal
            </p>
            <p>
              <strong>Guides:</strong>
              <br />
              - Prof. P. C. Pandey, Emeritus, Indian Institute of Technology,
              Kanpur
              <br />
              - Former Prof. and Head (Mechanical and Industrial Engineering
              Department), University of Roorkee (I.I.T.R.), Roorkee
              <br />- Prof. Harvendra Singh, Former Director, Bundelkhand
              Institute of Engineering and Technology, Jhansi
            </p>
          </div>
        </motion.div>

        {/* M.E. */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.background} p-6 rounded-lg ${theme.shadow} border border-gray-200`}
        >
          <FaGraduationCap className={`text-3xl mb-3 ${theme.secondary}`} />
          <h2 className={`font-semibold text-lg ${theme.primary} mb-2`}>
            Master of Engineering – Mechanical Engineering
          </h2>
          <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
            <p>
              <strong>Degree:</strong> First Division
            </p>
            <p>
              <strong>Year:</strong> 1998
            </p>
            <p>
              <strong>Institution:</strong> University of Roorkee (Now Indian
              Institute of Technology), Roorkee
            </p>
          </div>
        </motion.div>

        {/* B.E. */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`${theme.background} p-6 rounded-lg ${theme.shadow} border border-gray-200`}
        >
          <FaGraduationCap className={`text-3xl mb-3 ${theme.secondary}`} />
          <h2 className={`font-semibold text-lg ${theme.primary} mb-2`}>
            Bachelor of Engineering – Mechanical Engineering
          </h2>
          <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
            <p>
              <strong>Degree:</strong> First Division
            </p>
            <p>
              <strong>Year:</strong> 1993
            </p>
            <p>
              <strong>University:</strong> Karnataka University (Central
              University), Dharwad
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Professional Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${theme.primary} flex items-center`}
        >
          <FaUserTie className="mr-3" /> Professional Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Principal */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.background} p-6 rounded-lg ${theme.shadow} border border-gray-200`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h2 className={`font-semibold text-lg ${theme.primary} mb-2`}>
              Principal
            </h2>
            <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
              <p>
                <strong>Institution:</strong> Darbhanga College of Engineering
              </p>
              <p>
                <strong>Duration:</strong> 2022-Present
              </p>
            </div>
          </motion.div>

          {/* Director */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.background} p-6 rounded-lg ${theme.shadow} border border-gray-200`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h2 className={`font-semibold text-lg ${theme.primary} mb-2`}>
              Director
            </h2>
            <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
              <p>
                <strong>Institution:</strong> Rajkiya Engineering College,
                Ambedkar Nagar
              </p>
              <p>
                <strong>Duration:</strong> 2021-2022
              </p>
            </div>
          </motion.div>

          {/* Director */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.background} p-6 rounded-lg ${theme.shadow} border border-gray-200`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h2 className={`font-semibold text-lg ${theme.primary} mb-2`}>
              Director
            </h2>
            <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
              <p>
                <strong>Institution:</strong> Krishna Engineering College,
                Ghaziabad
              </p>
              <p>
                <strong>Duration:</strong> 2017-2021
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
