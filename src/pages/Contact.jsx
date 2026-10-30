import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaClock,
  FaCalendarAlt,
  FaUserCheck,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import BackButton from "../components/BackButton";

export default function Contact() {
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: <FaEnvelope className={`text-xl ${theme.secondary}`} />,
      label: "Email Address",
      value: "sandeeptiwari1970@gmail.com",
      link: "mailto:sandeeptiwari1970@gmail.com",
    },
    {
      icon: <FaPhone className={`text-xl ${theme.secondary}`} />,
      label: "Phone / Contact Numbers",
      value: "+91 98914 60727 / +91 94154 27948",
      link: "tel:+919891460727",
    },
    {
      icon: <FaMapMarkerAlt className={`text-xl ${theme.secondary}`} />,
      label: "Current Posting / Deputation",
      value: "Director, Sub Regional Science City and Innovation Hub, Bodh Gaya | Principal, Government Engineering College, Sheikhpura, DSTTE Bihar",
      link: "#",
    },
    {
      icon: <FaMapMarkerAlt className={`text-xl ${theme.secondary}`} />,
      label: "Permanent Address",
      value: "CPC-001, Omaxe Palm Green Society, Sector MU, Greater Noida, Uttar Pradesh",
      link: "#",
    },
    {
      icon: <FaLinkedin className={`text-xl ${theme.secondary}`} />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/dr-sandeep-tiwari-7a180629",
      link: "https://www.linkedin.com/in/dr-sandeep-tiwari-7a180629",
    },
  ];

  const references = [
    {
      name: "Prof. (Dr.) P. K. Mishra",
      role: "Professor (HAG), Chemical Engineering, IIT (BHU), Varanasi",
      formerRole: "Former Vice Chancellor, AKTU Lucknow",
      contact: "pkmishra.che@iitbhu.ac.in • +91 9415301462",
    },
    {
      name: "Prof. (Dr.) S. N. Singh",
      role: "Director, ABV-IIITM Gwalior",
      formerRole: "Former Vice Chancellor, MMMUT Gorakhpur; Professor, IIT Kanpur",
      contact: "snsingh@iiitm.ac.in • +91 9450605039",
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

      {/* Heading */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8 md:mb-12 text-center"
      >
        <h1 className={`text-4xl font-bold mb-2 ${theme.primary}`}>
          Get in Touch
        </h1>
        <p className={`${theme.accent} max-w-2xl mx-auto text-sm sm:text-base`}>
          Available for academic governance, institutional leadership consultations, research partnerships, and keynote addresses.
        </p>
        <div className={`h-1 w-20 mx-auto mt-3 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information Cards */}
        <div className="space-y-4">
          <h2 className={`text-xl font-bold mb-2 ${theme.primary}`}>
            Direct Contact Details
          </h2>
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * index }}
              className={`${theme.cardBg} p-4 rounded-xl ${theme.shadow} ${theme.border} border flex items-start`}
              whileHover={{ y: -2 }}
            >
              <div
                className={`p-3 rounded-full ${theme.secondaryBg} mr-4 flex-shrink-0`}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold ${theme.text} text-xs uppercase tracking-wider mb-1`}>
                  {item.label}
                </h3>
                {item.link !== "#" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme.primary} hover:underline transition-colors text-sm break-all font-medium`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className={`${theme.accent} text-sm leading-relaxed`}>{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Availability & Academic References */}
        <div className="space-y-6">
          {/* Availability */}
          <motion.div
            className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center mb-4">
              <FaClock className={`text-xl mr-3 ${theme.secondary}`} />
              <h2 className={`text-lg font-bold ${theme.primary}`}>
                Availability & Office Hours
              </h2>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <FaCalendarAlt className={`mt-1 mr-3 ${theme.accent}`} />
                <div>
                  <p className={`font-medium ${theme.text}`}>Office Hours:</p>
                  <p className={theme.accent}>Monday – Friday, 10:00 AM – 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className={`mt-1 mr-3 ${theme.accent}`} />
                <div>
                  <p className={`font-medium ${theme.text}`}>Preferred Channel:</p>
                  <p className={theme.accent}>Email or prior scheduled appointment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic References */}
          <motion.div
            className={`${theme.cardBg} p-4 sm:p-6 rounded-xl ${theme.shadow} ${theme.border} border`}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center mb-4">
              <FaUserCheck className={`text-xl mr-3 ${theme.secondary}`} />
              <h2 className={`text-lg font-bold ${theme.primary}`}>
                Academic & Professional References
              </h2>
            </div>
            <div className="space-y-3">
              {references.map((r, i) => (
                <div key={i} className={`p-3.5 rounded-lg ${theme.background} border ${theme.border} text-xs`}>
                  <p className={`font-bold text-sm ${theme.text}`}>{r.name}</p>
                  <p className={`font-medium ${theme.primary} mt-0.5`}>{r.role}</p>
                  <p className={`${theme.accent} mt-0.5`}>{r.formerRole}</p>
                  <p className={`${theme.secondaryText} font-medium mt-1.5 pt-1.5 border-t ${theme.border}`}>{r.contact}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
