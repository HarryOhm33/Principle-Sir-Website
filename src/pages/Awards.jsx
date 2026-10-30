import { motion } from "framer-motion";
import {
  FaAward,
  FaMedal,
  FaTrophy,
  FaCertificate,
  FaGraduationCap,
  FaShieldAlt,
  FaUserCheck,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import BackButton from "../components/BackButton";

export default function Awards() {
  const { theme } = useTheme();

  const awards = [
    {
      title: "CMI Level 5 Award in Management & Leadership",
      year: "2021",
      description:
        "Chartered Management Institute (CMI), United Kingdom, under the AICTE/UKIERI Technical Leadership & Management Programme, recognizing advanced excellence in educational and institutional administration.",
      contribution: "Educational Leadership & Institutional Management",
      icon: <FaMedal className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Global Education Award",
      year: "2019",
      description:
        "Conferred by the International Youth Fellowship (IYF), South Korea, on 10 September 2019 at Marwah Studios, Film City, Noida, for outstanding global contributions to youth advancement and higher education promotion.",
      contribution: "Promotion of Global Higher Education",
      icon: <FaTrophy className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Appreciation and Recognition as Member",
      year: "2025",
      description:
        "Conferred by UNAccc (Unity of Nations Action for Climate Change Council) for demonstrated commitment and innovative educational leadership advancing Sustainable Development Goals (SDGs).",
      contribution: "Climate Action & Sustainable Development Goals",
      icon: <FaCertificate className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Corona COVID-19 Fighter Award",
      year: "COVID-19 Era",
      description:
        "Awarded by the Drop Roball Federation of India for exemplary public humanitarian assistance, disaster relief coordination, and supporting students and communities during the pandemic crisis.",
      contribution: "Humanitarian Relief & Public Assistance",
      icon: <FaShieldAlt className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Certificate of Appreciation for Contribution to Education",
      year: "2018 / 2021",
      description:
        "Conferred by Rashtriya Shaikshik Mahasangh, Uttar Pradesh, acknowledging remarkable dedicated contributions to technical education standards, faculty welfare, and institutional growth.",
      contribution: "Excellence in Education Sector",
      icon: <FaAward className={`text-2xl ${theme.secondary}`} />,
    },
    {
      title: "Excellence in Academic Performance (Two Consecutive Years)",
      year: "2006 – 2007",
      description:
        "Awarded by G.L.A. Institute of Technology and Management, Mathura, for outstanding academic performance, innovative pedagogy, and exceptional department results.",
      contribution: "Pedagogic & Academic Performance",
      icon: <FaGraduationCap className={`text-2xl ${theme.secondary}`} />,
    },
  ];

  const references = [
    {
      name: "Prof. (Dr.) P. K. Mishra",
      role: "Professor (HAG), Chemical Engineering",
      institution: "Indian Institute of Technology (BHU), Varanasi",
      formerRole: "Former Vice Chancellor, Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      email: "pkmishra.che@iitbhu.ac.in",
      phone: "+91 9415301462",
    },
    {
      name: "Prof. (Dr.) S. N. Singh",
      role: "Director",
      institution: "Atal Bihari Vajpayee IIITM, Gwalior",
      formerRole: "Former Vice Chancellor, MMMUT Gorakhpur; Professor, IIT Kanpur",
      email: "snsingh@iiitm.ac.in",
      phone: "+91 9450605039",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-6 sm:py-10 md:py-12"
    >
      <BackButton />

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8 md:mb-12"
      >
        <h1
          className={`text-4xl font-bold mb-2 ${theme.primary} flex items-center`}
        >
          <FaAward className="mr-3" /> Awards & Honors
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Awards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-start mb-3">
                <div
                  className={`p-3 rounded-full ${theme.secondaryBg} mr-4 flex-shrink-0`}
                >
                  {award.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${theme.text}`}>
                    {award.title}
                  </h3>
                  <p className={`${theme.secondaryText} text-xs font-semibold`}>{award.year}</p>
                </div>
              </div>

              <p className={`${theme.text} text-sm leading-relaxed mb-3`}>
                {award.description}
              </p>
            </div>

            <div className={`${theme.border} border-t pt-2.5`}>
              <p className={`text-xs ${theme.accent} font-medium`}>
                <span className="font-semibold">Focus Area: </span>
                {award.contribution}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Recognitions & Appointments */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border mb-12`}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${theme.primary}`}>
          Institutional Recognitions & Honorary Appointments
        </h2>
        <ul className="space-y-3 text-sm">
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>Advisor (India), International Youth Fellowship (IYF), South Korea:</strong> Appointed on 19 December 2019 and Life Member from the same date (IYF operates across 92 countries).
            </span>
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>AICTE Margdarshak for NBA:</strong> Appointed from 15 June 2019 to guide and mentor technical institutions in achieving National Board of Accreditation status.
            </span>
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>Best Private Engineering Institute, North India:</strong> Awarded at the ABP National B-School Awards 2012 to Accurate Institute of Management and Technology during his tenure as Director.
            </span>
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>All India Rank 271 of 2,830 Colleges:</strong> Secured in Internship Day 2019 and a 4-star rating for the Institution Innovation Council from MHRD Innovation Cell during his directorship at Krishna Engineering College.
            </span>
          </motion.li>
          <motion.li
            className={`${theme.text} flex items-start`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span>
              <strong>Member, UNAccc:</strong> Unity of Nations Action for Climate Change Council, contributing to sustainability, net-zero education, and clean technologies.
            </span>
          </motion.li>
        </ul>
      </motion.div>

      {/* Professional References */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}
      >
        <div className="flex items-center mb-6">
          <FaUserCheck className={`text-3xl mr-3 ${theme.secondary}`} />
          <div>
            <h2 className={`text-2xl font-semibold ${theme.primary}`}>
              Academic & Professional References
            </h2>
            <p className={`text-sm ${theme.accent}`}>
              Distinguished institutional leaders who can speak to his academic leadership and research integrity
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {references.map((ref, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`p-5 rounded-lg border ${theme.border} ${theme.background}`}
            >
              <h3 className={`text-lg font-bold ${theme.primary}`}>
                {ref.name}
              </h3>
              <p className={`text-sm font-medium ${theme.text} mt-0.5`}>
                {ref.role}
              </p>
              <p className={`text-xs ${theme.accent}`}>
                {ref.institution}
              </p>
              <p className={`text-xs ${theme.secondaryText} mt-1`}>
                {ref.formerRole}
              </p>

              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 space-y-1 text-xs">
                <div className="flex items-center">
                  <FaEnvelope className={`mr-2 ${theme.accent}`} />
                  <a href={`mailto:${ref.email}`} className={`hover:underline ${theme.text}`}>
                    {ref.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className={`mr-2 ${theme.accent}`} />
                  <a href={`tel:${ref.phone}`} className={`hover:underline ${theme.text}`}>
                    {ref.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
