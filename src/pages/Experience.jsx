import { motion } from "framer-motion";
import { FaBriefcase, FaIndustry, FaUniversity, FaHandshake } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import BackButton from "../components/BackButton";

export default function Experience() {
  const { theme } = useTheme();

  const tableClass = `w-full border-collapse text-sm md:text-base`;
  const thClass = `border-b-2 ${theme.border} px-4 py-3 text-left ${theme.primary} font-semibold`;
  const tdClass = `border-b ${theme.border} px-4 py-3 ${theme.text}`;
  const trHoverClass = `hover:${theme.rowHoverBg} transition-colors`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-6 sm:py-10 md:py-12"
    >
      <BackButton />

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8 md:mb-12"
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
        className="mb-8 sm:mb-12 md:mb-16"
      >
        <div className="flex items-center mb-6">
          <FaUniversity className={`text-3xl mr-3 ${theme.secondary}`} />
          <div>
            <h2 className={`text-2xl font-semibold ${theme.primary}`}>
              Academic Experience: 30+ Years
            </h2>
            <p className={`text-sm ${theme.accent}`}>
              Including more than a decade as Director or Principal
            </p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.002 }}
          className={`${theme.cardBg} rounded-xl overflow-hidden shadow-lg border ${theme.border}`}
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
                    transition={{ delay: 0.05 * index }}
                    className={trHoverClass}
                  >
                    <td className={`${tdClass} font-medium`}>{exp.institute}</td>
                    <td className={tdClass}>{exp.designation}</td>
                    <td className={`${tdClass} whitespace-nowrap`}>{exp.duration}</td>
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
        className="mb-8 sm:mb-12 md:mb-16"
      >
        <div className="flex items-center mb-6">
          <FaIndustry className={`text-3xl mr-3 ${theme.secondary}`} />
          <div>
            <h2 className={`text-2xl font-semibold ${theme.primary}`}>
              Industrial Experience: 5 Years
            </h2>
            <p className={`text-sm ${theme.accent}`}>
              Core engineering, production, testing and hydro projects
            </p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.002 }}
          className={`${theme.cardBg} rounded-xl overflow-hidden shadow-lg border ${theme.border}`}
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
                    <td className={`${tdClass} font-medium`}>{exp.organization}</td>
                    <td className={tdClass}>{exp.designation}</td>
                    <td className={`${tdClass} whitespace-nowrap`}>{exp.duration}</td>
                    <td className={tdClass}>{exp.responsibilities}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* Industrial Consulting Experience */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <FaHandshake className={`text-3xl mr-3 ${theme.secondary}`} />
          <div>
            <h2 className={`text-2xl font-semibold ${theme.primary}`}>
              Industrial & Technical Consulting
            </h2>
            <p className={`text-sm ${theme.accent}`}>
              Corporate technical advisory and R&D consultation
            </p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.002 }}
          className={`${theme.cardBg} rounded-xl overflow-hidden shadow-lg border ${theme.border}`}
        >
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr className={`${theme.tableHeaderBg}`}>
                  <th className={thClass}>Organization</th>
                  <th className={thClass}>Role</th>
                  <th className={thClass}>Duration</th>
                  <th className={thClass}>Scope</th>
                </tr>
              </thead>
              <tbody>
                {consultingExperience.map((exp, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={trHoverClass}
                  >
                    <td className={`${tdClass} font-medium`}>{exp.organization}</td>
                    <td className={tdClass}>{exp.role}</td>
                    <td className={`${tdClass} whitespace-nowrap`}>{exp.duration}</td>
                    <td className={tdClass}>{exp.scope}</td>
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

// Data for academic experience (Chronological descending from PDF)
const academicExperience = [
  {
    institute: "Government Engineering College, Sheikhpura",
    designation: "Principal (on deputation as Director, Sub Regional Science City and Innovation Hub, Bodh Gaya)",
    duration: "26 Dec 2025 to date",
  },
  {
    institute: "Darbhanga College of Engineering, Darbhanga",
    designation: "Principal",
    duration: "14 Nov 2022 to 25 Dec 2025",
  },
  {
    institute: "Rajkiya Engineering College, Ambedkar Nagar",
    designation: "Director",
    duration: "5 Apr 2021 to 11 Nov 2022",
  },
  {
    institute: "Krishna Engineering College, Ghaziabad",
    designation: "Director",
    duration: "6 Jul 2017 to 3 Apr 2021",
  },
  {
    institute: "Global Institute of Management and Technology, Gurgaon",
    designation: "Director",
    duration: "23 Sep 2015 to 1 Jul 2017",
  },
  {
    institute: "Amity School of Engineering, Amity University, Noida",
    designation: "Professor, Mechanical and Automation Engineering",
    duration: "Mar 2014 to Sep 2015",
  },
  {
    institute: "Accurate Institute of Management and Technology, Greater Noida",
    designation: "Director",
    duration: "Sep 2011 to Sep 2013",
  },
  {
    institute: "Accurate Institute of Management and Technology, Greater Noida",
    designation: "Director Research",
    duration: "Mar 2010 to Sep 2011",
  },
  {
    institute: "College of Engineering and Technology, IILM-AHL, Greater Noida",
    designation: "Professor and Head",
    duration: "Oct 2009 to Mar 2010",
  },
  {
    institute: "Accurate Institute of Management and Technology, Greater Noida",
    designation: "Associate Professor and Head",
    duration: "Aug 2008 to Oct 2009",
  },
  {
    institute: "G.L.A. Institute of Technology and Management, Mathura",
    designation: "Reader, Mechanical Engineering",
    duration: "Jan 2007 to Aug 2008",
  },
  {
    institute: "Azad Institute of Engineering and Technology, Lucknow",
    designation: "Assistant Professor and Senior Lecturer",
    duration: "Jun 2000 to Jan 2007",
  },
];

// Data for industrial experience
const industrialExperience = [
  {
    organization: "Tribhuvan Steel Industries Ltd.",
    designation: "Production Engineer",
    duration: "Apr 1998 to May 2000",
    responsibilities:
      "Reporting to General Manager (Production). Production, heat treatment, finishing, inspection, testing and dispatch.",
  },
  {
    organization: "Subhash Project and Marketing Ltd., New Delhi",
    designation: "Mechanical Engineer",
    duration: "Jan 1994 to May 1996",
    responsibilities:
      "Reporting to Vice-President (Planning). Site selection for 6 MW hydroelectric stations at Chamoli, and technical collaboration with foreign clients.",
  },
];

// Data for industrial consulting
const consultingExperience = [
  {
    organization: "Slog Square Electromech Pvt. Ltd.",
    role: "Senior Consultant",
    duration: "From Aug 2017 to date",
    scope: "Consultancy on electromechanical manufacturing, process optimization, and automation.",
  },
  {
    organization: "Jyoti Cero Pvt. Ltd.",
    role: "Technical Consultant",
    duration: "From Apr 2020 to date",
    scope: "Technical consulting on ceramic materials, production efficiency, and quality management.",
  },
  {
    organization: "Rosa Tech Pvt. Ltd.",
    role: "Technical Consultant",
    duration: "From Jul 2022 to date",
    scope: "Product development, drone/IoT integration, and engineering consultation.",
  },
];
