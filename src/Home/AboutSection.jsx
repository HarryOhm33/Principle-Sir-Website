import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaAward, FaChartLine } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const shortBio = `Prof. (Dr.) Sandeep Tiwari is a senior academic administrator, mechanical engineering researcher, and institutional leader with 30+ years in academia (more than a decade as Director or Principal) and 5 in industry. He currently serves as Director, Sub Regional Science City and Innovation Hub, Bodh Gaya (on deputation, Govt. of Bihar) with substantive post as Principal, Government Engineering College, Sheikhpura. His leadership spans funded research, innovation and incubation, institutional partnerships, and curriculum development for Bihar Engineering University.`;

  const highlights = [
    { label: "Funds Mobilised", val: "₹10 Cr+" },
    { label: "Research H-Index", val: "7" },
    { label: "Ph.D. Scholars Awarded", val: "5" },
    { label: "National & Int. Talks", val: "115+" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-16"
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
        className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border}`}
        whileHover={{ y: -5 }}
      >
        {/* Short Bio */}
        <p className={`${theme.text} mb-6 leading-relaxed`}>{shortBio}</p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg text-center ${theme.border} border ${theme.background}`}
            >
              <div className={`text-xl font-bold ${theme.primary}`}>{h.val}</div>
              <div className={`text-xs ${theme.accent} mt-1`}>{h.label}</div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            className={`${theme.background} p-5 rounded-lg ${theme.border} border`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`font-semibold text-lg ${theme.primary} mb-3 flex items-center`}>
              <FaGraduationCap className="mr-2" /> Education & Training
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>Ph.D. in Mechanical Engineering</strong>
                  <br />
                  <span className={theme.accent}>GBTU / AKTU Lucknow (Research at IIT BHU), 2011</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>M.E. in Mechanical Engineering</strong>
                  <br />
                  <span className={theme.accent}>University of Roorkee (now IIT Roorkee), 1998 (First Division)</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>B.E. in Mechanical Engineering</strong>
                  <br />
                  <span className={theme.accent}>Karnataka University, Dharwad, 1993 (First Division)</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>CEP – Advanced Manufacturing</strong>
                  <br />
                  <span className={theme.accent}>IIT Kharagpur, June 2001 (Grade A)</span>
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Key Positions */}
          <motion.div
            className={`${theme.background} p-5 rounded-lg ${theme.border} border`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={`font-semibold text-lg ${theme.primary} mb-3 flex items-center`}>
              <FaBriefcase className="mr-2" /> Key Leadership Positions
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>Director</strong>, Sub Regional Science City & Innovation Hub, Bodh Gaya
                  <br />
                  <span className={theme.accent}>On deputation, Govt. of Bihar (2025–Present)</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>Principal</strong>, Government Engineering College, Sheikhpura
                  <br />
                  <span className={theme.accent}>Substantive post, DSTTE Bihar (from 26 Dec 2025)</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>Principal</strong>, Darbhanga College of Engineering
                  <br />
                  <span className={theme.accent}>14 Nov 2022 to 25 Dec 2025</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>Director</strong>, Rajkiya Engineering College, Ambedkar Nagar
                  <br />
                  <span className={theme.accent}>5 Apr 2021 to 11 Nov 2022</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>Director</strong>, Krishna Engineering College, Ghaziabad
                  <br />
                  <span className={theme.accent}>6 Jul 2017 to 3 Apr 2021</span>
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
            className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
          >
            Read More →
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
