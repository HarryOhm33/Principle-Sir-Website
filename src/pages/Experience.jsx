import { motion } from "framer-motion";
import { FaBriefcase, FaIndustry, FaUniversity } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Experience() {
  const { theme } = useTheme();

  const tableClass = `w-full border-collapse text-sm md:text-base`;
  const thClass = `border-b-2 ${theme.border} px-4 py-3 text-left ${theme.primary} font-semibold`;
  const tdClass = `border-b ${theme.border} px-4 py-3 ${theme.text}`;
  const trHoverClass = `hover:${theme.rowHoverBg}`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h1
          className={`text-4xl font-bold mb-2 ${theme.primary} flex items-center`}
        >
          <FaBriefcase className="mr-3" /> Work Experience
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Academic Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <div className="flex items-center mb-6">
          <FaUniversity className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Academic Experience: 25+ Years
          </h2>
        </div>

        <motion.div
          whileHover={{ scale: 1.005 }}
          className={`${theme.cardBg} rounded-xl overflow-hidden shadow-lg`}
        >
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr className={`${theme.tableHeaderBg}`}>
                  <th className={thClass}>Institute</th>
                  <th className={thClass}>Designation</th>
                  <th className={thClass}>Duration</th>
                </tr>
              </thead>
              <tbody>
                {academicExperience.map((exp, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={trHoverClass}
                  >
                    <td className={tdClass}>{exp.institute}</td>
                    <td className={tdClass}>{exp.designation}</td>
                    <td className={tdClass}>{exp.duration}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* Industrial Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center mb-6">
          <FaIndustry className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Industrial Experience: 5 Years
          </h2>
        </div>

        <motion.div
          whileHover={{ scale: 1.005 }}
          className={`${theme.cardBg} rounded-xl overflow-hidden shadow-lg`}
        >
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr className={`${theme.tableHeaderBg}`}>
                  <th className={thClass}>Organization</th>
                  <th className={thClass}>Designation</th>
                  <th className={thClass}>Duration</th>
                  <th className={thClass}>Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {industrialExperience.map((exp, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={trHoverClass}
                  >
                    <td className={tdClass}>{exp.organization}</td>
                    <td className={tdClass}>{exp.designation}</td>
                    <td className={tdClass}>{exp.duration}</td>
                    <td className={tdClass}>{exp.responsibilities}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// Data for academic experience
const academicExperience = [
  {
    institute: "Darbhanga College of Engineering, Darbhanga",
    designation: "Principal",
    duration: "Nov 14, 2022 to till date",
  },
  {
    institute: "Rajkiya Engineering College, Ambedkar Nagar",
    designation: "Director",
    duration: "April 05, 2021 to Nov 12, 2022",
  },
  {
    institute: "Krishna Engineering College, Ghaziabad, Uttar Pradesh",
    designation: "Director",
    duration: "July 06, 2017 to April 03, 2021",
  },
  {
    institute: "Global Institute of Mgmt. and Technology, Gurgaon",
    designation: "Director",
    duration: "September 23, 2015 to July 01, 2017",
  },
  {
    institute: "Amity School of Engineering, Amity University, Noida",
    designation: "Professor, Mechanical and Automation Engineering",
    duration: "Mar. 2014 - Sept. 2015",
  },
  {
    institute: "Accurate Institute of Management and Technology, Greater Noida",
    designation:
      "Director & Director Research / Professor and Head [Mechanical Engineering]",
    duration: "Sept. 2011 – Sep. 2013 / Mar 2010 – Sep 2011",
  },
  {
    institute: "College of Engineering and Technology, IILM-AHL, Greater Noida",
    designation: "Professor and Head of Mechanical Engineering Department",
    duration: "Oct 2009 – Mar 2010",
  },
  {
    institute: "Accurate Institute of Management and Technology, Greater Noida",
    designation:
      "Associate Professor and Head of Department [Mechanical Engineering]",
    duration: "August 2008 – Oct 2009",
  },
  {
    institute: "G.L.A. Institute of Technology and Management, Maltuwa",
    designation: "Reader in Department of Mechanical Engineering",
    duration: "Jan 2007 – August 2008",
  },
  {
    institute: "Azad Institute of Engineering and Technology, Lucknow",
    designation: "Assistant Professor and Senior Lecturer",
    duration: "June 2000 – Jan 2007",
  },
];

// Data for industrial experience
const industrialExperience = [
  {
    organization: "Tribhuvan Steel Industries Limited",
    designation: "Production Engineer",
    duration: "April 1998 – May 2000",
    responsibilities:
      "Direct reporting to General Manager (Production). Key responsibilities involved Production, Heat Treatment, Finishing, Inspection, Testing and Dispatch.",
  },
  {
    organization: "Subhash Project and Marketing Limited, New Delhi",
    designation: "Mechanical Engineer",
    duration: "Jan 1994 – May 1996",
    responsibilities:
      "Direct reporting to Vice-President (Planning). Being an active member of the team, visited Charnoll (Uttaranchal) for the site selection of 6 MW Hydroelectric stations. Also, a part of the group, responsible for technical collaboration with foreign clients.",
  },
];
