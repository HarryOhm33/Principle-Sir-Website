import { motion } from "framer-motion";
import { FaTrophy, FaFlask, FaRocket, FaGraduationCap } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useNavigate } from "react-router-dom";

export default function AchievementSection() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const keyProjects = [
    {
      title: "Finishing School for 3D Printing and Additive Manufacturing",
      fundingAgency: "C-DAC Kolkata, MeitY (Govt. of India)",
      amount: "₹6.00 Crore",
      detail: "505 trained (336 DCE students, 169 external) with 18 placements at L&T, JSW, and Reliance.",
    },
    {
      title: "IoT & Drone-Based Agriculture Monitoring System",
      fundingAgency: "MMMUT Gorakhpur (Nodal Agency) / REC Ambedkar Nagar",
      amount: "₹289.50 Lakh Total",
      detail: "Deployment of smart sensors and agricultural drones for rural community skill empowerment.",
    },
    {
      title: "Innovation, Incubation & Entrepreneurship Research Grants",
      fundingAgency: "EDI Ahmedabad, AICTE, DST, MeitY, AKTU",
      amount: "₹118.88 Lakh",
      detail: "15 prototypes developed; 4-Star rating for Institution Innovation Council at KEC Ghaziabad.",
    },
  ];

  const flagshipMilestones = [
    {
      title: "MIITIE Incubation Centre",
      desc: "First incubation centre at a state-govt engineering college in Bihar. 30 startups onboarded with ₹10L each from Bihar Startup Trust Fund.",
    },
    {
      title: "Historic Placement Record – ₹43 LPA",
      desc: "Record package at ServiceNow for the 2020–24 batch, the highest across all DSTTE Bihar engineering colleges; 80+ placements.",
    },
    {
      title: "16 Institutional MoUs with 35+ Organisations",
      desc: "Collaborations signed with IIT Patna, IIT Roorkee, Tezpur University, NIELIT, C-DAC, and industrial leaders.",
    },
    {
      title: "Arsenic-Safe Water & Rural Outreach",
      desc: "Installed Tezpur University's patented Arsiron Nilogon filters in campus hostels and rural households in Mahinam Benipur.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-16"
      id="achievements"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2
          className={`text-3xl font-bold ${theme.primary} flex items-center mb-2`}
        >
          <FaTrophy className="mr-3" /> Key Achievements & Flagship Initiatives
        </h2>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Flagship Milestones Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="grid sm:grid-cols-2 gap-4 mb-8"
      >
        {flagshipMilestones.map((m, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border border-l-4 ${theme.secondary}`}
          >
            <h4 className={`font-semibold ${theme.text} mb-2 flex items-center`}>
              <FaRocket className={`mr-2 ${theme.secondaryText}`} />
              {m.title}
            </h4>
            <p className={`${theme.accent} text-sm leading-relaxed`}>{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Research Projects Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mb-6"
      >
        <div className="flex items-center mb-4">
          <FaFlask className={`text-2xl mr-3 ${theme.secondary}`} />
          <h3 className={`text-xl font-semibold ${theme.primary}`}>
            Major Nationally Funded Projects
          </h3>
        </div>

        <div className="space-y-4">
          {keyProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`${theme.cardBg} p-4 rounded-lg ${theme.shadow} border ${theme.border}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h4 className={`font-semibold ${theme.text}`}>
                  {project.title}
                </h4>
                <span className={`text-sm font-bold ${theme.primary} mt-1 sm:mt-0`}>
                  {project.amount}
                </span>
              </div>
              <p className={`text-xs ${theme.secondaryText} mb-1.5 font-medium`}>
                {project.fundingAgency}
              </p>
              <p className={`text-sm ${theme.accent}`}>{project.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View More Details Button */}
      <div className="mt-6 text-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/achievements")}
          className={`px-5 py-2 rounded-md ${theme.button} font-medium ${theme.shadow} ${theme.buttonHover}`}
        >
          View All Achievements, MoUs & Initiatives →
        </motion.button>
      </div>
    </motion.section>
  );
}
