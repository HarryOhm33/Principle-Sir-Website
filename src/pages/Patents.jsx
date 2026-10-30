import { motion } from "framer-motion";
import { FaLightbulb, FaCertificate, FaFileAlt } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import BackButton from "../components/BackButton";

export default function Patents() {
  const { theme } = useTheme();

  const grantedPatents = [
    {
      title: "Optimized Air-Fuel Mixing & Filtering Device (AFMFD) for Enhanced Fuel Efficiency in Spark Ignition Engines",
      patentNo: "Patent No. 598967",
      applicationNo: "Application 202311051115 (Filed 29 July 2023)",
      status: "Granted",
      year: "2023 – 2024",
      inventors: "Yogendra Nath Yadav, Dr. Mrideema Yadav, Vivek Patel, Dr. Sandeep Tiwari and Ramesh",
      authority: "Patent Office, Government of India",
      description: "Novel air-fuel mixing and filtration mechanism designed to improve combustion efficiency, reduce emissions, and boost thermal performance in spark ignition engines.",
    },
    {
      title: "An Electric Vehicle Acceleration Enhancer System",
      patentNo: "Patent No. 583554",
      applicationNo: "National Patent (Product)",
      status: "Granted / Registered",
      year: "2023 – 2024",
      inventors: "Mahip Singh, Dr. Sandeep Tiwari, Shubham Kumar and Md. Samiruddin Ansari",
      authority: "Government of India",
      description: "Advanced powertrain acceleration enhancement subsystem for electric vehicles optimizing torque delivery and energy conservation during rapid acceleration.",
    },
    {
      title: "System and Method for Environmentally Conscious Machining",
      patentNo: "Process Patent",
      applicationNo: "National Jurisdiction",
      status: "Granted",
      year: "2018",
      inventors: "Dr. Sandeep Tiwari and Research Associates",
      authority: "Patent Office, India",
      description: "Innovative approach to minimize ecological impact and hazardous emissions during heavy industrial metal machining processes.",
    },
    {
      title: "Innovative Machining Process with Sustainable Coolant Use",
      patentNo: "Process Patent",
      applicationNo: "National Jurisdiction",
      status: "Granted",
      year: "2017",
      inventors: "Dr. Sandeep Tiwari and Research Associates",
      authority: "Patent Office, India",
      description: "Methodology for reducing toxic coolant wastage through bio-filtration and dynamic flow recirculation in traditional machining.",
    },
  ];

  const filedPatents = [
    {
      title: "Design and Development of Multifunctional Agribot",
      year: "2018",
      status: "Filed & Published",
      inventors: "Dr. Patil Nagesh Umakant and Dr. Sandeep Tiwari",
      description: "Multipurpose agricultural robotic vehicle engineered for automated precision farming, weed clearance, crop spraying, and soil monitoring.",
    },
    {
      title: "Advanced Coolant Disposal System for Sustainable Manufacturing",
      year: "2020",
      status: "Filed",
      inventors: "Dr. Sandeep Tiwari and Research Associates",
      description: "System engineered for safe high-throughput neutralization, separation, and recycling of spent synthetic and semi-synthetic industrial cutting fluids.",
    },
    {
      title: "Smart Tool Wear Monitoring Device",
      year: "2019",
      status: "Filed",
      inventors: "Dr. Sandeep Tiwari and Research Associates",
      description: "Sensor-integrated acoustic emission monitoring device for real-time tool wear prediction and failure prevention in CNC machining.",
    },
    {
      title: "Energy Efficient Hybrid Machining System",
      year: "2021",
      status: "Filed",
      inventors: "Dr. Sandeep Tiwari and Research Associates",
      description: "Integrated manufacturing workstation combining mechanical abrasion with electrical discharge for superior energy efficiency.",
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
          <FaLightbulb className="mr-3" /> Patents & Intellectual Property
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Granted Patents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-6 sm:mb-8 md:mb-12"
      >
        <div className="flex items-center mb-6">
          <FaCertificate className={`text-3xl mr-3 ${theme.secondary}`} />
          <div>
            <h2 className={`text-2xl font-semibold ${theme.primary}`}>
              Granted Government Patents
            </h2>
            <p className={`text-sm ${theme.accent}`}>
              Patents granted by the Patent Office, Government of India
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {grantedPatents.map((patent, index) => (
            <motion.div
              key={`granted-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border border-l-4 ${theme.secondary}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className={`text-xl font-bold ${theme.text}`}>
                  {patent.title}
                </h3>
                <span className={`px-2.5 py-1 rounded ${theme.secondaryBg} text-xs font-bold mt-1 sm:mt-0 self-start sm:self-auto`}>
                  {patent.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mb-2">
                <span className={`font-semibold ${theme.primary}`}>{patent.patentNo}</span>
                <span className={theme.accent}>•</span>
                <span className={theme.accent}>{patent.applicationNo}</span>
                <span className={theme.accent}>•</span>
                <span className={theme.accent}>{patent.authority}</span>
                <span className={theme.accent}>•</span>
                <span className={theme.accent}>{patent.year}</span>
              </div>

              <p className={`text-xs ${theme.accent} mb-2`}>
                <strong>Inventors:</strong> {patent.inventors}
              </p>

              <p className={`${theme.text} text-sm leading-relaxed`}>
                {patent.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Filed/Published Patents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center mb-6">
          <FaFileAlt className={`text-3xl mr-3 ${theme.secondary}`} />
          <div>
            <h2 className={`text-2xl font-semibold ${theme.primary}`}>
              Filed & Published Patents
            </h2>
            <p className={`text-sm ${theme.accent}`}>
              Patents under evaluation or published in Patent Journal
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {filedPatents.map((patent, index) => (
            <motion.div
              key={`filed-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border border-l-4 ${theme.secondary}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className={`text-lg font-semibold ${theme.text}`}>
                  {patent.title}
                </h3>
                <span className={`px-2 py-0.5 rounded ${theme.secondaryBg} text-xs font-medium mt-1 sm:mt-0 self-start sm:self-auto`}>
                  {patent.status} ({patent.year})
                </span>
              </div>

              {patent.inventors && (
                <p className={`text-xs ${theme.accent} mb-2`}>
                  <strong>Inventors:</strong> {patent.inventors}
                </p>
              )}

              <p className={`${theme.text} text-sm opacity-90`}>
                {patent.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional IP & Prototype Commercialization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className={`mt-8 sm:mt-12 ${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${theme.primary}`}>
          Prototypes & Commercialization Initiatives
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span className={theme.text}>
              <strong>15 innovative ideas developed into prototypes</strong> with commercialization potential at Krishna Engineering College.
            </span>
          </li>
          <li className="flex items-start">
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span className={theme.text}>
              <strong>NIDHI PRAYAS Funding:</strong> Two student innovations selected by KIET-TBI and one by TBI-IIM Bangalore for ₹20 lakh seed funding each.
            </span>
          </li>
          <li className="flex items-start">
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span className={theme.text}>
              <strong>AKTU Research Grants:</strong> Two institutional innovation projects approved under AKTU&apos;s Visvesvaraya Research Promotion Scheme.
            </span>
          </li>
          <li className="flex items-start">
            <span className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-1.5 mr-3 flex-shrink-0`}></span>
            <span className={theme.text}>
              <strong>3D-Printed Biomedical Prototypes:</strong> Functional 3D-printed prosthetic thumb and custom orthotic ankle supports developed at the DCE 3D Printing Lab.
            </span>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
