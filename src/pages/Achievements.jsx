import { motion } from "framer-motion";
import {
  FaTrophy,
  FaUniversity,
  FaFlask,
  FaBriefcase,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Achievements() {
  const { theme } = useTheme();

  const researchProjects = [
    {
      title: "Finishing School of 3D Printing and Additive Manufacturing",
      fundingAgency: "CDAC, MEITY, Govt. Of India",
      position: "Principal Investigator (PI)",
      duration: "10.05.2025 - 2030",
      amount: "Approx. 6 Crores",
    },
    {
      title:
        "Development of IoT & Drone based Agriculture Monitoring System with objective of Skill Development of Socially Deprived Community",
      fundingAgency:
        "Madan Mohan Malviya University of Technology (MMMUT), Gorakhpur (Nodal Agency)",
      position: "Co-Principal Investigator (Co-PI)",
      duration: "2020 - 2022",
      remarks: "Resigned REC Ambedkar Nagar before completion of Project",
    },
  ];

  const leadershipRoles = [
    {
      institution: "Krishna Engineering College, Ghaziabad",
      position: "Director",
      period: "06/07/2017 - 03/04/2021",
      achievements: [
        "Fundings during tenure:",
        "2017-18: ₹41.66 Lacs",
        "2018-19: ₹33.96 Lacs",
        "2019-20: ₹43.26 Lacs",
      ],
    },
    {
      institution: "DCE Darbhanga",
      position: "Principal",
      period: "14/11/2022 - Till Date",
      achievements: [
        "Established Finishing School of 3D Printing by CDAC (Approx. 6 Cr. Project), MeitY, Govt. of India",
        "Nodal Centres established at DCE Darbhanga through dedicated efforts",
      ],
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
          <FaTrophy className="mr-3" /> Achievements & Leadership
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Research Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaFlask className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Research Projects
          </h2>
        </div>

        <div className="space-y-6">
          {researchProjects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-xl font-semibold ${theme.text} mb-3`}>
                {project.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="flex items-start">
                  <FaUniversity className={`mt-1 mr-2 ${theme.accent}`} />
                  <div>
                    <p className={`text-sm font-medium ${theme.text}`}>
                      Funding Agency
                    </p>
                    <p className={theme.accent}>{project.fundingAgency}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaBriefcase className={`mt-1 mr-2 ${theme.accent}`} />
                  <div>
                    <p className={`text-sm font-medium ${theme.text}`}>
                      Position
                    </p>
                    <p className={theme.accent}>{project.position}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <FaCalendarAlt className={`mt-1 mr-2 ${theme.accent}`} />
                  <div>
                    <p className={`text-sm font-medium ${theme.text}`}>
                      Duration
                    </p>
                    <p className={theme.accent}>{project.duration}</p>
                  </div>
                </div>

                {project.amount && (
                  <div className="flex items-start">
                    <FaMoneyBillWave className={`mt-1 mr-2 ${theme.accent}`} />
                    <div>
                      <p className={`text-sm font-medium ${theme.text}`}>
                        Funding Amount
                      </p>
                      <p className={theme.accent}>{project.amount}</p>
                    </div>
                  </div>
                )}
              </div>

              {project.remarks && (
                <div
                  className={`mt-4 p-3 rounded-lg border-l-4 border-yellow-500 ${theme.cardBg} ${theme.shadow}`}
                >
                  <p className="text-sm">
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                      Remarks:
                    </span>{" "}
                    <span className={`${theme.text}`}>{project.remarks}</span>
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership Roles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center mb-6">
          <FaBriefcase className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Leadership Roles
          </h2>
        </div>

        <div className="space-y-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={`role-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-semibold ${theme.text}`}>
                    {role.institution}
                  </h3>
                  <p className={`${theme.accent} font-medium`}>
                    {role.position}
                  </p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <FaCalendarAlt className={`mr-2 ${theme.accent}`} />
                  <span className={theme.accent}>{role.period}</span>
                </div>
              </div>

              <div className={`${theme.border} border-t pt-4`}>
                <h4 className={`text-sm font-semibold ${theme.text} mb-2`}>
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span
                        className={`w-2 h-2 rounded-full ${theme.secondaryBg} mt-2 mr-3 flex-shrink-0`}
                      ></span>
                      <span className={theme.text}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
