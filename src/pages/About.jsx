import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUserTie,
  FaUniversity,
  FaBriefcase,
  FaTools,
  FaCertificate,
  FaChartBar,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import BackButton from "../components/BackButton";

export default function About() {
  const { theme } = useTheme();

  const atAGlance = [
    { label: "Funds Mobilised Across Institutions", value: "₹10 crore+" },
    { label: "National & Int. Plenary Talks", value: "100+ & 15+" },
    { label: "National Examinership Assignments", value: "50+" },
    { label: "Ph.D. Scholars Supervised & Awarded", value: "5" },
    { label: "Research Metric (H-Index)", value: "7" },
    { label: "Experience in Education & Industry", value: "30+ & 5 Yrs" },
  ];

  const coreExpertise = [
    "Academic administration & institutional leadership",
    "Innovation, incubation & entrepreneurship",
    "Additive manufacturing & 3D printing",
    "IoT, robotics & smart agriculture systems",
    "Accreditation & quality assurance (NBA/NAAC)",
    "Industry–academia collaborations & MoUs",
    "Funded research project management",
    "Intellectual property & patent development",
  ];

  const professionalDevelopment = [
    {
      title: "AICTE/UKIERI Leadership & Management Programme",
      org: "Chartered Management Institute (CMI), UK",
      year: "2020 – 2021",
    },
    {
      title: "MDP: Financing and Valuation of New Ventures and Start-Ups",
      org: "Indian Institute of Management (IIM) Lucknow",
      year: "December 2019",
    },
    {
      title: "International Course: Transportation Planning and Safety",
      org: "Indian Institute of Technology (IIT) Delhi",
      year: "2014",
    },
    {
      title: "Short-Term Training: Improving Industry Institute Interaction",
      org: "NITTTR Chandigarh",
      year: "2004",
    },
    {
      title: "Keynote Speaker at Five National Conferences & Seminars",
      org: "K.N.G.D. Modi Engineering College, Modinagar",
      year: "2014 – 2019",
    },
  ];

  const consultingAppointments = [
    {
      role: "Senior Consultant",
      org: "Slog Square Electromech Pvt. Ltd.",
      period: "From Aug 2017",
    },
    {
      role: "Technical Consultant",
      org: "Jyoti Cero Pvt. Ltd.",
      period: "From Apr 2020",
    },
    {
      role: "Technical Consultant",
      org: "Rosa Tech Pvt. Ltd.",
      period: "From Jul 2022",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 py-6 sm:py-10 md:py-12"
    >
      <BackButton />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 ${theme.primary} flex items-center`}
      >
        <FaGraduationCap className="mr-3" /> Executive Profile
      </motion.h1>
      <div className={`h-1 w-20 ${theme.primaryBg} rounded-full mb-6 sm:mb-8`}></div>

      {/* Intro Paragraph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border mb-6 sm:mb-8`}
      >
        <p className={`${theme.text} leading-relaxed mb-4`}>
          <strong>Prof. (Dr.) Sandeep Tiwari</strong> (Indian national, born 26 April 1971) is a senior academic administrator, mechanical engineering researcher, and institutional leader with more than 30 years in education and 5 years in industry. He currently serves as <strong>Director, Sub Regional Science City and Innovation Hub, Bodh Gaya</strong> (on deputation, Government of Bihar) with a substantive appointment as <strong>Principal, Government Engineering College, Sheikhpura</strong> (DSTTE Bihar, from 26 Dec 2025).
        </p>
        <p className={`${theme.text} leading-relaxed mb-4`}>
          His leadership spans funded research initiatives, incubation centers, and institutional partnerships. During his tenure as Principal of Darbhanga College of Engineering (2022–2025), he established the ₹6 crore C-DAC Finishing School for 3D Printing & Additive Manufacturing, Bihar&apos;s first government-college incubation center (MIITIE), and signed 16 landmark MoUs with premier universities, government bodies, and industry leaders.
        </p>
        <p className={`${theme.text} leading-relaxed`}>
          Previously, he coordinated the establishment of incubation centres across Government Engineering Colleges in Uttar Pradesh and served as Dean (Innovation & Incubation) at Dr. A.P.J. Abdul Kalam Technical University (AKTU). He helped formulate the Mechanical Engineering curriculum for Bihar Engineering University (BEU) and served as an AICTE Margdarshak for the National Board of Accreditation (NBA).
        </p>
      </motion.div>

      {/* At a Glance Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className={`text-2xl font-bold mb-4 ${theme.primary} flex items-center`}>
          <FaChartBar className="mr-3" /> At a Glance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {atAGlance.map((item, idx) => (
            <div
              key={idx}
              className={`${theme.cardBg} p-3.5 sm:p-4 rounded-xl ${theme.shadow} ${theme.border} border text-center`}
            >
              <div className={`text-xl sm:text-2xl font-bold ${theme.primary}`}>{item.value}</div>
              <div className={`text-xs ${theme.accent} mt-1 font-medium`}>{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Core Expertise */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border mb-8 sm:mb-12`}
      >
        <h2 className={`text-2xl font-bold mb-4 ${theme.primary} flex items-center`}>
          <FaTools className="mr-3" /> Core Expertise
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {coreExpertise.map((exp, idx) => (
            <div key={idx} className="flex items-center">
              <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mr-3 flex-shrink-0`}></span>
              <span className={`text-sm ${theme.text}`}>{exp}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className={`text-2xl font-bold mb-6 ${theme.primary} flex items-center`}>
          <FaGraduationCap className="mr-3" /> Education & Academic Credentials
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ph.D. */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border`}
          >
            <FaGraduationCap className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-2`}>
              Doctorate of Philosophy (Ph.D.) – Mechanical Engineering
            </h3>
            <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
              <p>
                <strong>Year:</strong> 2011
              </p>
              <p>
                <strong>University:</strong> Gautam Budh Technical University, Lucknow (now AKTU)
              </p>
              <p>
                <strong>Research Place:</strong> Indian Institute of Technology – BHU, Varanasi (2004–2008)
              </p>
              <p>
                <strong>Thesis Title:</strong> Strategic Approach for Environmentally Conscious Traditional Machining by Effective Coolant Disposal
              </p>
              <p>
                <strong>Guides:</strong>
                <br />
                • Prof. P. C. Pandey, Emeritus, IIT Kanpur; Former Professor & Head, University of Roorkee
                <br />
                • Prof. Harvendra Singh, Former Director, Bundelkhand Institute of Engineering & Technology, Jhansi
              </p>
            </div>
          </motion.div>

          {/* M.E. */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border`}
          >
            <FaGraduationCap className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-2`}>
              Master of Engineering (M.E.) – Mechanical Engineering
            </h3>
            <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
              <p>
                <strong>Degree:</strong> First Division
              </p>
              <p>
                <strong>Year:</strong> 1998
              </p>
              <p>
                <strong>Institution:</strong> University of Roorkee (now Indian Institute of Technology, Roorkee)
              </p>
            </div>
          </motion.div>

          {/* B.E. */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border`}
          >
            <FaGraduationCap className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-2`}>
              Bachelor of Engineering (B.E.) – Mechanical Engineering
            </h3>
            <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
              <p>
                <strong>Degree:</strong> First Division
              </p>
              <p>
                <strong>Year:</strong> 1993
              </p>
              <p>
                <strong>University:</strong> Karnataka University, Dharwad
              </p>
            </div>
          </motion.div>

          {/* Continuing Education Programme */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border`}
          >
            <FaCertificate className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-2`}>
              Continuing Education Programme – Advanced Manufacturing
            </h3>
            <div className={`${theme.text} text-sm leading-relaxed space-y-2`}>
              <p>
                <strong>Institution:</strong> Indian Institute of Technology (IIT) Kharagpur
              </p>
              <p>
                <strong>Year:</strong> June 2001
              </p>
              <p>
                <strong>Grade:</strong> Grade A
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Leadership Positions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${theme.primary} flex items-center`}>
          <FaUserTie className="mr-3" /> Key Leadership Roles
        </h2>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-1`}>
              Director
            </h3>
            <p className={`text-xs ${theme.secondary} font-semibold uppercase mb-2`}>Current (Deputation)</p>
            <div className={`${theme.text} text-sm leading-relaxed space-y-1`}>
              <p><strong>Organization:</strong> Sub Regional Science City and Innovation Hub, Bodh Gaya</p>
              <p><strong>Duration:</strong> 2025 – Present</p>
              <p className={theme.accent}>Government of Bihar</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-1`}>
              Principal
            </h3>
            <p className={`text-xs ${theme.secondary} font-semibold uppercase mb-2`}>Substantive Post</p>
            <div className={`${theme.text} text-sm leading-relaxed space-y-1`}>
              <p><strong>Institution:</strong> Government Engineering College, Sheikhpura</p>
              <p><strong>Duration:</strong> 26 Dec 2025 to date</p>
              <p className={theme.accent}>DSTTE Bihar</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-1`}>
              Principal
            </h3>
            <p className={`text-xs ${theme.accent} font-semibold uppercase mb-2`}>Prior Tenure</p>
            <div className={`${theme.text} text-sm leading-relaxed space-y-1`}>
              <p><strong>Institution:</strong> Darbhanga College of Engineering</p>
              <p><strong>Duration:</strong> 14 Nov 2022 to 25 Dec 2025</p>
              <p className={theme.accent}>DSTTE Bihar</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-1`}>
              Director
            </h3>
            <p className={`text-xs ${theme.accent} font-semibold uppercase mb-2`}>Prior Tenure</p>
            <div className={`${theme.text} text-sm leading-relaxed space-y-1`}>
              <p><strong>Institution:</strong> Rajkiya Engineering College, Ambedkar Nagar</p>
              <p><strong>Duration:</strong> 5 Apr 2021 to 11 Nov 2022</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-1`}>
              Director
            </h3>
            <p className={`text-xs ${theme.accent} font-semibold uppercase mb-2`}>Prior Tenure</p>
            <div className={`${theme.text} text-sm leading-relaxed space-y-1`}>
              <p><strong>Institution:</strong> Krishna Engineering College, Ghaziabad</p>
              <p><strong>Duration:</strong> 6 Jul 2017 to 3 Apr 2021</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border`}
          >
            <FaUniversity className={`text-3xl mb-3 ${theme.secondary}`} />
            <h3 className={`font-semibold text-lg ${theme.primary} mb-1`}>
              Director
            </h3>
            <p className={`text-xs ${theme.accent} font-semibold uppercase mb-2`}>Prior Tenure</p>
            <div className={`${theme.text} text-sm leading-relaxed space-y-1`}>
              <p><strong>Institution:</strong> Accurate Institute of Mgmt. & Tech., Greater Noida</p>
              <p><strong>Duration:</strong> Sep 2011 to Sep 2013</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Governance & Industrial Consulting */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
      >
        <div className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}>
          <h3 className={`text-xl font-bold mb-4 ${theme.primary} flex items-center`}>
            <FaBriefcase className="mr-3" /> Governance & Academic Councils
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
              <span className={theme.text}>
                <strong>Executive Council, Academic Council & Finance Committee</strong>: Active responsibilities including AKTU, Bihar Engineering University, and Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology.
              </span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
              <span className={theme.text}>
                <strong>BEU Curriculum Formulation</strong>: Formulated the Mechanical Engineering undergraduate curriculum for Bihar Engineering University, approved 14 May 2025.
              </span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
              <span className={theme.text}>
                <strong>Dean (Innovation & Incubation), AKTU</strong>: Coordinated the establishment of incubation centres across Government Engineering Colleges in Uttar Pradesh.
              </span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
              <span className={theme.text}>
                <strong>AICTE Margdarshak for NBA</strong>: Appointed from 15 June 2019 to mentor engineering institutions toward NBA accreditation.
              </span>
            </li>
          </ul>
        </div>

        <div className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}>
          <h3 className={`text-xl font-bold mb-4 ${theme.primary} flex items-center`}>
            <FaTools className="mr-3" /> Industrial Consulting
          </h3>
          <ul className="space-y-4 text-sm">
            {consultingAppointments.map((c, i) => (
              <li key={i} className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.secondary} mt-1.5 mr-2 flex-shrink-0`}></span>
                <span className={theme.text}>
                  <strong>{c.role}</strong> – {c.org}
                  <br />
                  <span className={theme.accent}>{c.period}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Selected Professional Development */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}
      >
        <h3 className={`text-xl font-bold mb-4 ${theme.primary} flex items-center`}>
          <FaCertificate className="mr-3" /> Selected Professional Development & Courses
        </h3>
        <div className="space-y-3">
          {professionalDevelopment.map((p, i) => (
            <div key={i} className={`p-3 rounded-lg ${theme.background} border ${theme.border}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className={`font-semibold ${theme.text}`}>{p.title}</div>
                <div className={`text-xs ${theme.accent} mt-1 sm:mt-0 font-medium`}>{p.year}</div>
              </div>
              <div className={`text-sm ${theme.accent}`}>{p.org}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
