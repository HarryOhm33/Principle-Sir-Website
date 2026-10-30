import { motion } from "framer-motion";
import {
  FaTrophy,
  FaUniversity,
  FaFlask,
  FaBriefcase,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaHandshake,
  FaGraduationCap,
  FaBuilding,
  FaUsers,
  FaWater,
  FaRocket,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import BackButton from "../components/BackButton";

export default function Achievements() {
  const { theme } = useTheme();

  const researchProjects = [
    {
      title: "Finishing School for 3D Printing and Additive Manufacturing",
      fundingAgency: "C-DAC Kolkata, MeitY (Govt. of India) under National Capacity Building Mission",
      position: "Co-Principal Investigator (Co-PI)",
      duration: "10.05.2025 to date",
      amount: "About ₹6.00 Crore",
      highlights: [
        "Established state-of-the-art industrial additive manufacturing laboratory at DCE Darbhanga",
        "505 people trained: 336 from DCE and 169 external engineering participants",
        "18 placements attributed to the programme at L&T, JSW, and Reliance",
        "Specialized internships in 3D scanning and reverse engineering with Adroitec",
        "Student capstones built: 3D-printed prosthetic thumb, orthotic ankle support, ABS-CF & PETG-CF parameter studies",
      ],
    },
    {
      title: "Development of IoT & Drone based Agriculture Monitoring System with objective of Skill Development of Socially Deprived Community",
      fundingAgency: "Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur (Nodal Agency)",
      position: "Co-Principal Investigator (Co-PI)",
      duration: "2020 – 2022",
      amount: "₹289.50 Lakh total (REC Ambedkar Nagar received ₹44.648 Lakh)",
      remarks: "Led project execution at REC Ambedkar Nagar prior to transfer to DCE Darbhanga",
      highlights: [
        "Advanced deployment of agricultural drones and sensor nodes for field monitoring",
        "Skill development training for local and socially deprived rural youth",
      ],
    },
    {
      title: "Innovation, Incubation and Entrepreneurship Research Promotion Grants",
      fundingAgency: "EDI Ahmedabad, AICTE, DST, DST-NSTDB, MeitY, CST-UP, and AKTU",
      position: "Director, Krishna Engineering College",
      duration: "2017 – 2020",
      amount: "₹118.88 Lakh (₹41.66L + ₹33.96L + ₹43.26L)",
      highlights: [
        "15 innovative ideas developed into functional prototypes with commercial potential",
        "2 projects approved under AKTU's Visvesvaraya Research Promotion Scheme",
        "2 projects selected under NIDHI PRAYAS by KIET-TBI and 1 by TBI-IIM Bangalore for ₹20 Lakh seed funding each",
        "Achieved All India Rank 271 of 2,830 colleges in Internship Day 2019",
        "Awarded 4-Star rating for Institution Innovation Council (IIC) by MHRD Innovation Cell",
      ],
    },
  ];

  const dceKeyCentres = [
    {
      title: "MIITIE – Mithila Institute of Inclusive Technological Innovation & Entrepreneurship",
      subtitle: "First incubation centre established at a state-government engineering college in Bihar",
      inauguration: "Inaugurated on 4 July 2023 by Shri Samir Kumar Mahaseth (Minister of Industries, Bihar); revisited 24 Aug 2024 by Shri Nitish Mishra (Minister of Industries & Tourism)",
      chiefAdvisor: "Sri Naveen Jha, Senior ALI Fellow, Harvard University",
      impact: [
        "30 start-ups onboarded in 2023–26 across agritech, edtech, IoT, textiles, handicrafts, and clean tech",
        "₹10 lakh disbursed from the Bihar Startup Trust Fund to all onboarded start-ups",
        "30+ student ideas selected for ₹10 lakh each under Bihar Startup Policy 2022 (first time in DCE history)",
        "21 seasoned industry and academic mentors onboarded",
        "Organized flagship events: Glocal Unconference (July 2023), Innovate Mithila (Aug 2024), and National Start-up Day meets",
      ],
    },
  ];

  const studentMilestones = [
    {
      metric: "₹43 LPA",
      title: "Highest Placement Package",
      desc: "Secured at ServiceNow by 2020–24 batch (highest ever in DSTTE Bihar engineering colleges)",
    },
    {
      metric: "80+",
      title: "Total Placements",
      desc: "Students placed in top multinationals and core industries from the 2020–24 batch",
    },
    {
      metric: "17",
      title: "GATE Qualifiers",
      desc: "DCE students qualifying GATE with 7 admitted directly to IITs and NITs for Master's programs",
    },
    {
      metric: "16",
      title: "Institutional MoUs",
      desc: "Formal partnerships signed with central institutes, industry bodies, and international researchers",
    },
  ];

  const institutionalMoUs = [
    {
      category: "National Agencies & Government",
      partners: [
        { name: "C-DAC Kolkata (MeitY)", outcome: "₹6 Cr 3D Printing Finishing School; 505 trained, 18 placements" },
        { name: "C-DAC Patna (MeitY)", outcome: "6-day hands-on bootcamp on drone assembly, flying & AI/ML" },
        { name: "NIELIT Patna (MeitY)", outcome: "Student internships and emerging technology skill training" },
        { name: "ICAR-NRC for Makhana, Darbhanga", outcome: "Joint research seminar and exhibition (NRCM-NASMAC 2024)" },
        { name: "Postal Training Centre, Darbhanga", outcome: "Entrepreneurship development and institutional support" },
      ],
    },
    {
      category: "Academic Institutions & Universities",
      partners: [
        { name: "IIT Patna", outcome: "PCB Fabrication Lab and shared co-working incubator space" },
        { name: "IIT Roorkee", outcome: "IoT Laboratory established on campus at DCE Darbhanga" },
        { name: "Tezpur University (Prof. Robin K. Dutta)", outcome: "Patented Arsiron Nilogon technology: groundwater testing & arsenic filter units" },
        { name: "CIMP Patna & CIMP-BIIF", outcome: "Entrepreneurship development and 2-day Career Growth workshops" },
        { name: "KIET Group of Institutions", outcome: "Academic exchange, student training, and faculty development" },
        { name: "IIT BHU, IIT Madras, UNSW Sydney", outcome: "Professors of Practice: Prof. S.N. Upadhyay, Prof. P.K. Mishra, Prof. Sanjay Jha" },
      ],
    },
    {
      category: "Industry, Start-up & Skills Ecosystem",
      partners: [
        { name: "Bihar Startup Trust Fund (Startup Bihar)", outcome: "₹32 lakh seed funding to 4 student start-ups; 34 incubatees" },
        { name: "TiE Patna & Mithila Angel Network", outcome: "Mentoring network and angel investment advisory for student founders" },
        { name: "Mithila Stack", outcome: "IT internships; 4 student interns secured placement offers at TCS" },
        { name: "AVRO India Ltd. & Extra C", outcome: "Industrial training, Extra Edge Club, crossword & communication workshops" },
        { name: "Teknoground & Dynamic Flight Vision", outcome: "Drone pilot training programme, UAV R&D, and flight labs" },
      ],
    },
  ];

  const communityOutreach = [
    {
      title: "Arsenic-Safe Drinking Water (Mahinam Benipur & Hostels)",
      desc: "Using Tezpur University's patented Arsiron Nilogon technology, tested regional groundwater, installed arsenic filtration in campus hostels, and distributed water filter units to rural households in Mahinam Benipur (29 Dec 2024).",
    },
    {
      title: "Pahal School Outreach & District Science Mela",
      desc: "DCE faculty visited local government schools to teach STEM subjects under the Pahal initiative; hosted the District Science Mela for school students at MIITIE on 5 October 2024.",
    },
    {
      title: "Women & Agritech Entrepreneurship Conclaves",
      desc: "Conclaves organized in 2023 and 2024 connecting 50+ Jeevika Didis and female students with startup mentors; partnered with NABARD and Sangharsh Bioenergy for farmer conclaves.",
    },
    {
      title: "Healthcare Camps & Disaster Relief",
      desc: "Mega health checkup camp with 12 specialist doctors (Lions Club), Red Cross Day blood donation and plantation drive, and relief distribution in flood-affected regional areas.",
    },
  ];

  const campusInfrastructure = [
    "Grand main entrance gate, modern security gatehouse, and planted approach avenue",
    "High-tech booth-based Language Laboratory for Japanese (JLPT) and German classes",
    "Upgraded tiered seminar halls equipped with modern audio-visual technology",
    "Executive Conference Room for MoU signings, corporate meets, and MSME sessions",
    "Modernized faculty lounge, partitioned faculty cabins, and campus sports courts",
  ];

  const visitingDignitaries = [
    { name: "Sri Samir Kumar Mahaseth", role: "Minister of Industries, Govt. of Bihar", event: "Inauguration of MIITIE (04.07.2023)" },
    { name: "Sri Nitish Mishra", role: "Minister of Industries & Tourism, Bihar", event: "Innovate Mithila & MIITIE inspection (24.08.2024)" },
    { name: "Sri Krishna Kumar Mantoo", role: "Minister of IT, Govt. of Bihar", event: "Chief Guest, Industry-Institute Meet (02.05.2025)" },
    { name: "Prof. (Dr.) S. K. Verma", role: "Vice Chancellor, Bihar Engineering University", event: "Chief Guest, 16th Foundation Day (20.11.2024)" },
    { name: "Sri Vivek Kumar Singh", role: "Chairman RERA, former Development Commissioner", event: "Inaugurated Extra Edge Club (16.12.2023)" },
    { name: "Shri Kamal Taori, IAS (Retd.)", role: "Former Secretary, Government of India", event: "Keynote, Empowering Bharat & Gram Swaraj (13.05.2025)" },
    { name: "Prof. S. N. Upadhyay", role: "Former Director, IIT (BHU) Varanasi", event: "Orientation of 2024 Batch & Academic Guidance" },
    { name: "Prof. (Dr.) P. K. Mishra", role: "Professor (HAG), IIT BHU; former VC, AKTU", event: "Yuvotsav, 2024 Induction & Innovation Mentorship" },
    { name: "Prof. Kripa Shanker", role: "Deputy Director IIT Kanpur; former VC GBTU", event: "Faculty Interaction & Research Development" },
    { name: "Prof. Sanjay Jha", role: "UNSW Sydney, Australia", event: "Keynote on Cyber Security and Global Research" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-6 sm:py-10 md:py-12"
    >
      <BackButton />

      {/* Title */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8 md:mb-12"
      >
        <h1
          className={`text-4xl font-bold mb-2 ${theme.primary} flex items-center`}
        >
          <FaTrophy className="mr-3" /> Achievements, Initiatives & Leadership
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Student Outcomes & Placement Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mb-8 sm:mb-12 md:mb-14"
      >
        <div className="flex items-center mb-6">
          <FaGraduationCap className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Student Results & Institutional Records (2020–2025)
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {studentMilestones.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border text-center`}
            >
              <div className={`text-3xl font-extrabold ${theme.primary} mb-1`}>
                {item.metric}
              </div>
              <div className={`font-semibold ${theme.text} text-sm mb-1`}>
                {item.title}
              </div>
              <div className={`text-xs ${theme.accent}`}>{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Major Centres Created at DCE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-8 sm:mb-12 md:mb-14"
      >
        <div className="flex items-center mb-6">
          <FaRocket className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Flagship Centres & Incubation Ecosystem
          </h2>
        </div>

        <div className="space-y-6">
          {dceKeyCentres.map((centre, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-4 sm:p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-xl font-bold ${theme.primary} mb-1`}>
                {centre.title}
              </h3>
              <p className={`text-sm ${theme.accent} font-medium mb-3`}>
                {centre.subtitle}
              </p>

              <div className={`text-xs ${theme.secondaryText} font-medium mb-2`}>
                {centre.inauguration}
              </div>
              <div className={`text-xs ${theme.accent} mb-4`}>
                <strong>Chief Advisor:</strong> {centre.chiefAdvisor}
              </div>

              <div className={`${theme.border} border-t pt-3`}>
                <h4 className={`text-sm font-semibold ${theme.text} mb-2`}>
                  Key Accomplishments:
                </h4>
                <ul className="space-y-2">
                  {centre.impact.map((point, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-2 flex-shrink-0`}></span>
                      <span className={theme.text}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Research Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mb-8 sm:mb-12 md:mb-14"
      >
        <div className="flex items-center mb-6">
          <FaFlask className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Major Nationally Funded Research & Incubation Projects
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
              className={`${theme.cardBg} p-4 sm:p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-xl font-semibold ${theme.text} mb-3`}>
                {project.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-sm">
                <div className="flex items-start">
                  <FaUniversity className={`mt-1 mr-2 ${theme.secondary}`} />
                  <div>
                    <p className={`font-medium ${theme.text}`}>Funding Agency</p>
                    <p className={theme.accent}>{project.fundingAgency}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaBriefcase className={`mt-1 mr-2 ${theme.secondary}`} />
                  <div>
                    <p className={`font-medium ${theme.text}`}>Position</p>
                    <p className={theme.accent}>{project.position}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCalendarAlt className={`mt-1 mr-2 ${theme.secondary}`} />
                  <div>
                    <p className={`font-medium ${theme.text}`}>Duration</p>
                    <p className={theme.accent}>{project.duration}</p>
                  </div>
                </div>

                {project.amount && (
                  <div className="flex items-start">
                    <FaMoneyBillWave className={`mt-1 mr-2 ${theme.secondary}`} />
                    <div>
                      <p className={`font-medium ${theme.text}`}>Grant Amount</p>
                      <p className={`font-semibold ${theme.primary}`}>{project.amount}</p>
                    </div>
                  </div>
                )}
              </div>

              {project.highlights && (
                <div className={`${theme.border} border-t pt-3 mt-3`}>
                  <h4 className={`text-sm font-semibold ${theme.text} mb-2`}>
                    Key Deliverables & Outcomes:
                  </h4>
                  <ul className="space-y-1.5 text-sm">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.primaryBg} mt-2 mr-2 flex-shrink-0`}></span>
                        <span className={theme.text}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.remarks && (
                <div className={`mt-3 p-2.5 rounded-lg border-l-4 border-amber-500 ${theme.background}`}>
                  <p className="text-xs">
                    <span className="font-semibold text-amber-600 dark:text-amber-400">Note:</span>{" "}
                    <span className={theme.text}>{project.remarks}</span>
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Institutional MoUs & Partnerships */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mb-8 sm:mb-12 md:mb-14"
      >
        <div className="flex items-center mb-6">
          <FaHandshake className={`text-3xl mr-3 ${theme.secondary}`} />
          <div>
            <h2 className={`text-2xl font-semibold ${theme.primary}`}>
              Institutional MoUs & Collaborations (16 MoUs with 35+ Organisations)
            </h2>
            <p className={`text-sm ${theme.accent}`}>
              Partnerships executed between Feb 2023 and Dec 2025 delivering tangible student training and infrastructure
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {institutionalMoUs.map((group, idx) => (
            <div
              key={idx}
              className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border flex flex-col justify-between`}
            >
              <div>
                <h3 className={`font-bold text-base ${theme.primary} mb-3 pb-2 border-b ${theme.border}`}>
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.partners.map((p, i) => (
                    <li key={i} className="text-xs">
                      <div className={`font-semibold ${theme.text}`}>{p.name}</div>
                      <div className={`${theme.accent} mt-0.5`}>{p.outcome}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Community Outreach & Social Impact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="mb-8 sm:mb-12 md:mb-14"
      >
        <div className="flex items-center mb-6">
          <FaWater className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Community Outreach & Rural Engagement in Mithila
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {communityOutreach.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`${theme.cardBg} p-5 rounded-xl ${theme.shadow} ${theme.border} border`}
            >
              <h3 className={`font-semibold text-base ${theme.text} mb-2`}>
                {item.title}
              </h3>
              <p className={`text-sm ${theme.accent} leading-relaxed`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Campus Infrastructure Created */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mb-8 sm:mb-12 md:mb-14"
      >
        <div className="flex items-center mb-6">
          <FaBuilding className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Campus Infrastructure Developed (2023–2025)
          </h2>
        </div>

        <div className={`${theme.cardBg} p-4 sm:p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}>
          <div className="grid sm:grid-cols-2 gap-3">
            {campusInfrastructure.map((infra, idx) => (
              <div key={idx} className="flex items-start">
                <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-2 mr-3 flex-shrink-0`}></span>
                <span className={`text-sm ${theme.text}`}>{infra}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Intellectuals and Leaders Visited DCE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
      >
        <div className="flex items-center mb-6">
          <FaUsers className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Intellectuals, Ministers & Academic Leaders Hosted
          </h2>
        </div>

        <div className={`${theme.cardBg} rounded-xl overflow-hidden shadow-lg border ${theme.border}`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className={`${theme.tableHeaderBg}`}>
                  <th className={`border-b-2 ${theme.border} px-4 py-3 text-left ${theme.primary} font-semibold`}>Dignitary / Leader</th>
                  <th className={`border-b-2 ${theme.border} px-4 py-3 text-left ${theme.primary} font-semibold`}>Designation / Institution</th>
                  <th className={`border-b-2 ${theme.border} px-4 py-3 text-left ${theme.primary} font-semibold`}>Occasion</th>
                </tr>
              </thead>
              <tbody>
                {visitingDignitaries.map((v, i) => (
                  <tr key={i} className={`hover:${theme.rowHoverBg} transition-colors border-b ${theme.border}`}>
                    <td className={`px-4 py-2.5 font-medium ${theme.text}`}>{v.name}</td>
                    <td className={`px-4 py-2.5 ${theme.accent}`}>{v.role}</td>
                    <td className={`px-4 py-2.5 ${theme.text}`}>{v.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

