import { motion } from "framer-motion";
import {
  FaBook,
  FaJournalWhills,
  FaUniversity,
  FaFileAlt,
  FaGlobe,
  FaGraduationCap,
} from "react-icons/fa";
import { useTheme } from "../context/themeContext";

export default function Publications() {
  const { theme } = useTheme();

  const publications = {
    internationalJournals: [
      {
        title:
          "Particle Optimization of CeO2/Water Nanofluids in Flat Plate Solar Collector",
        journal:
          "International Journal of Engineering and Advanced Technology (IJEAT)",
        year: "2019",
        details:
          "ISSN: 2249-8958, pp. 1467-1474 Volume 9 Issue 2, December 2019",
      },
      {
        title: "Solar Operated Agribot For Green House Farming",
        journal:
          "International Journal of Mechanical and Production Engineering Research and Development (IJMPERD)",
        year: "2019",
        details:
          "Vol. 9, Issue 5, Oct 2019, 643-656, ISSN (P): 2250-2378; ISSN(E): 2319-4516, UGC",
      },
      {
        title:
          "Hardness measurement of surfaces on hybrid metal matrix composite created by turning using an abrasive water jet and WED",
        journal: "Measurement",
        year: "2019",
        details:
          "Volume 131, January 2019, pp. 628-639, ISSN: 0263-2241, Impact Factor: 3.364, SCOPUS",
      },
      {
        title:
          "Enhancement in mechanical properties of EDTA reinforced KP/PMMA composite",
        journal:
          "International Journal of Emerging Technology and Innovative Research (IJETIR)",
        year: "2018",
        details:
          "Volume 5 Issue 12, pp. 51-57, December 2018, ISSN: 2349-5162, Impact Factor: 5.87, UGC",
      },
      {
        title:
          "To Investigate the Fracture Assessment of PMMA/KP Polymer Composites, applying PLWF Mechanism",
        journal: "IIRMRST",
        year: "2018",
        details:
          "Volume 6 Issue XII, pp. 644-649, Dec 2018 ISSN: 2321-9653, IC Value 45.98, SJ Impact Factor: 6.887, UGC",
      },
      {
        title:
          "Performance analysis of hybrid nano fluids in flat plate solar collector as an advanced working fluid",
        journal: "Solar Energy",
        year: "2018",
        details:
          "Vol. 167, pp. 231-241, June 2018, Publisher: Elsevier, Impact Factor: 4.608, ISSN: 0038-092X, SCOPUS",
      },
      {
        title: "Implementation of Modern Technology in Agriculture",
        journal: "International Journal of Creative Research Thoughts (IJCRT)",
        year: "2018",
        details:
          "Volume 6 Issue 1, pp. 1446-1451, January 2018, ISSN: 2320-2882, UGC",
      },
      {
        title: "Effective Design of an Agribot for Smart Farming",
        journal: "International Journal of Computing and Business Research",
        year: "2017",
        details:
          "Volume 7 Issue 4 November - December 2017, International Manuscript ID 22296160Y14201707, ISSN (online) 2229-6166, Impact Factor: 4.197, ESCI",
      },
      {
        title:
          "Performance Evaluation of Subsonic Axial-Flow Tandem Airfoils of a Core Compressor Rotor",
        journal: "International Journal in IT & Engineering",
        year: "2017",
        details:
          "Vol. 05, Issue-09, September 2017, ISSN: 2231-1776, Impact Factor: 6.341, SCIE",
      },
      {
        title:
          "Surface integrity in tangential turning of thin white AMS/VAC/ADO3 by abrasive waterjet",
        journal: "Journal of Manufacturing Processes",
        year: "2017",
        details: "Volume 28 pp. 11-20, August 2017, SCOPUS",
      },
      {
        title:
          "An Efficient Design of Agribot and Novel Implementation for Smart Agriculture",
        journal: "International Electrical Journal of Review and Research",
        year: "2017",
        details:
          "Volume 5 Issue 4 July 2017, International Manuscript ID 23482001Y51407201703, ISSN 2348-2001, SSCI",
      },
      {
        title:
          "Study of Flow in Axial Compressor with the help of OREDesign Analysis",
        journal:
          "International Journal of Research in Engineering and Applied Sciences (IJREAS)",
        year: "2018",
        details:
          "Vol.6, Issue10, pp. 251-260, October 2018, ISSN(P) 2249-9095, ISSN(E) 2349-6523, ESCI",
      },
      {
        title:
          "Study of Ultrasonic Waves and the Temperature Effects on its Applications",
        journal: "International Journal in IT and Engineering",
        year: "2015",
        details:
          "Vol. 03 ISSN: 410, October 2015 pp 112-120, ISSN: 2321-1776, Impact Factor: 4.747",
      },
      {
        title:
          "Theoretical Aspects of Axial-Compressor & its effectiveness on Pressure rise of Mass Flow and Rotor Speed",
        journal: "International Journal in Physical & Applied Sciences",
        year: "2015",
        details:
          "Vol.02 Issue 04, pp. 87-94, April 2015, ISSN 2394-5710, Impact Factor-2.871, ESCI",
      },
      {
        title:
          "Experimental Investigation of Wire EDM Process Parameters on Aluminum Metal Matrix Composite AI/20+24Xz",
        journal: "International Journal of Advance Research and Innovation",
        year: "2014",
        details: "Volume 2 Issue 2 (2014), pp. 151-515, ISSN 2373-2358, ESCI",
      },
      {
        title:
          "Experimental Studies of Heat Transfer and Pressure Drop Characteristics of Nanofluids under Turbulent Flow Regime",
        journal: "International Journal of Engineering and Science",
        year: "2014",
        details: "Volume 1, January 2014, ISSN: 2348-330X, SCIE",
      },
      {
        title:
          "A Review on Fabrication and Characterization of Composite Material and Its Building Analysis (BMW TEM)",
        journal: "International Journal of Advance Research and Innovation",
        year: "2014",
        details:
          "Volume 2, Issue 1, (2014), pp. 185-193, ISSN: 2347-3258, ESCI",
      },
      {
        title:
          "A Review on Fabrication and Characterization of Aluminum Metal Matrix Composite (AMMC)",
        journal: "International Journal of Advance Research and Innovation",
        year: "2014",
        details: "Volume 2 (2014), pp. 516-521, ESCI",
      },
      {
        title:
          "Adsorption of Emulsified Oil from Spent Metal Working Fluid Using Agro-Waste of Cajanus-Casan",
        journal:
          "International Journal of Environmental Technology and Management",
        year: "2011",
        details:
          "Volume 14, No.1/12/34, pp. 115-131, 2011 ISSN 1466-2132, SCOPUS",
      },
      {
        title:
          "A Comparative Study of the Performance Behaviour of Adsorbent Materials Used for the Treatment of Spent Cutting Fluids",
        journal:
          "International Journal of Environmental Technology and Management",
        year: "2010",
        details:
          "Volume 13, Issue 2, pp. 206-220, 2010, ISSN 1466-2132 DOI: 10.13504/IJETM.2010.034302, ESCI",
      },
      {
        title:
          "A Multi-Criteria Approach for the Selection and Grading of Adsorbent Materials for the removal of oil from spent cutting fluids",
        journal: "International Journal of Physical Sciences",
        year: "2009",
        details: "Volume 21 (1), pp. 85-98, 2009, SCIE",
      },
      {
        title:
          "Adsorption Chemistry of Oil-in-Water Emulsion from Spent Oil Based Cutting Fluids Using Sawdust of Mangifera Indica",
        journal:
          "International Journal of Environmental Application and Science",
        year: "2009",
        details: "Volume 4 (1), pp. 99-107, 2009, SCIE",
      },
    ],
    nationalJournals: [
      {
        title:
          "Role of high technology medical devices and its uses in patient care",
        journal: "Indian Journal of Forensic Medicine and Toxicology (IJFMT)",
        year: "2020",
        details: "Paper accepted in July 2020",
      },
      {
        title: "Viscosity of hybrid nanofluids: Measurement and comparison",
        journal: "Journal of Mechanical Engineering and Sciences",
        year: "2018",
        details:
          "Volume 12, Issue 2, pp. 3614-3623, June 2018, ISSN (Print): 2289-4659; e-ISSN: 2213-8380, SCOPUS",
      },
      {
        title:
          "Surface Integrity in wire EDM tangential turning of in-situ hybrid metal mix composite A359/BAC/A102B",
        journal: "Science and Engineering of Composite Materials",
        year: "2018",
        details:
          "Volume 26, Issue 1, pp. 122-133, March-April 2018, ISSN 2191-0359, Impact Factor 0.7, SCOPUS",
      },
      {
        title:
          "Technical necessities and progressive improvement in Aerospace composite materials in the light of PMMA",
        journal: "JIST",
        year: "2017",
        details: "Vol. 1, No. 2, July-Dec 2017, ISSN: 2581-6691, UGC",
      },
      {
        title:
          "Performance Evaluation of Temperature Effects on Ultrasound Fluid Flow Using Various Flow Measurement Techniques",
        journal: "A Journal of Advances in Management, IT & Social Sciences",
        year: "2016",
        details:
          "VOL. 6, ISSUE 8, August 2016, pp 43-51, Impact Factor 4.282, ISSN: (2321-4571)",
      },
      {
        title:
          "Investigation of microstructural and mechanical properties of metal matrix composite A359/84c through electromagnetic srlr casting",
        journal: "Indian journal of engineering & materials sciences",
        year: "2016",
        details:
          "Volume 23 (243), pp. 171-180, 2016 (April & June), ISSN 0975-1017 (online), SCOPUS",
      },
      {
        title:
          "A review on intensification of metal matrix composite and its non-conventional machining",
        journal: "Science and Engineering of Composite Materials",
        year: "2016",
        details:
          "Volume 25, Issue 2, pp. 213-228, May 2016, Impact Report 618, DOI 10.1151/Scien-2015-0287, SCOPUS",
      },
    ],
    bookChapters: [
      {
        title:
          "Parametric study during abrasive water jet turning of hybrid metal matrix composite",
        publisher: "Lecture Notes in Mechanical Engineering",
        year: "2019",
        details:
          "ISBN 2195-4356, Lecture Notes in ME 2019, pp. 72-84, cited by 5, DOI: 10.1007/978-3-319-99353-9_9, SCOPUS",
      },
      {
        title:
          "Thermal Performance Enhancement of Flat-Plate Solar Collector using CeO2-Water Nanofluid",
        publisher: "Springer Proceedings in Energy",
        year: "2019",
        details:
          "International Conference on Efficient Solar Power Generation and Energy Harvesting ESPGEH 2019, DOI: https://doi.org/10.1007/978-981-15-3635-9_12, Print ISBN: 978-981-15-3634-2, Online ISBN 978-981-15-3635-9, UGC",
      },
      {
        title: "SMART Cattle Feeding Machine for Current Agriculture Scenario",
        publisher:
          "Proceedings of the 2nd International Conference on Future Learning Aspects of Mechanical Engineering",
        year: "2020",
        details: "FLAME 2020 August 06-07, 2020, SCOPUS",
      },
      {
        title:
          "Study of Water-based Hybrid Solar Photovoltaic Thermal Collector",
        publisher: "Springer Proceedings",
        year: "2019",
        details:
          "International Conference in Mechanical and Energy Technology 2019, vol 174, pp 519-527, DOI: https://doi.org/10.1007/978-981-15-2647-3_47, Print ISBN: 978-981-15-2646-6, Online ISBN: 978-981-15-2647-3, SCOPUS",
      },
    ],
    conferences: [
      {
        title:
          "Theoretical Simulations and Experimental Studies on the Crack Growth of CI-Mo alloy steel using Finite Element Method",
        conference:
          "International Conference on Mechanical & Industrial Technologies (ICMT 2025)",
        year: "2025",
        details:
          "Muzaffarpur Institute of Technology, Muzaffarpur May 24-25, 2025 ISBN: 978-81-988021-6-3",
      },
      {
        title:
          "Combustion Modeling of CH4-Air Mixture in an Asymmetric Channel with an Obstacle",
        conference:
          "International Conference on Mechanical & Industrial Technologies (ICMT 2025)",
        year: "2025",
        details:
          "Muzaffarpur Institute of Technology, Muzaffarpur May 24-25, 2025 ISBN: 978-81-988021-6-3",
      },
      {
        title:
          "Investigation of Hydro Energy Potential and Its Challenges in Himalayan State: Uttarakhand",
        conference:
          "International Conference on Machine Learning, Advances in Computing, Renewable Energy and Communication (MARC 2020)",
        year: "2020",
        details:
          "Krishna Engineering College, Ghaziabad December 17-18, 2020 (Scopus Indexed)",
      },
      {
        title:
          "Design optimization of solar thermal energy storage tank: Using the stratification coefficient",
        conference:
          "International Conference on Machine Learning, Advances in Computing, Renewable Energy and Communication (MARC 2020)",
        year: "2020",
        details:
          "Krishna Engineering College, Ghaziabad December 17-18, 2020 (Scopus indexed)",
      },
      {
        title:
          "Assessment of the Environmental Performances of the Small and Medium Scale Indian Industries in the context of Green Supply Chain Management",
        conference:
          "International Conference on Optimization Techniques and Recent Innovations in Mechanical Engineering (ICOTRIME)",
        year: "2020",
        details:
          "Krishna Engineering College, Ghaziabad December 11-12, 2020. Published in IOP Material Science & Engineering - Conference Series (Scopus Indexed)",
      },
      {
        title:
          "Performance analysis of ERS using R134a - An experimental investigation",
        conference:
          "International Conference on Optimization Techniques and Recent Innovations in Mechanical Engineering (ICOTRIME)",
        year: "2020",
        details:
          "Krishna Engineering College, Ghaziabad December 11-12, 2020. Published in IOP Material Science & Engineering - Conference Series (Scopus Indexed)",
      },
      {
        title: "Effects of Young's Modulus in a Compliant Respiratory Tract",
        conference:
          "International Conference on Optimization Techniques and Recent Innovations in Mechanical Engineering (ICOTRIME)",
        year: "2020",
        details:
          "Krishna Engineering College, Ghaziabad December 11-12, 2020. Published in IOP Material Science & Engineering - Conference Series (Scopus Indexed)",
      },
      {
        title:
          "Mechanical Characterization & Phase Evaluation of ODS Aluminum Alloy",
        conference:
          "International Conference on Optimization Techniques and Recent Innovations in Mechanical Engineering (ICOTRIME)",
        year: "2020",
        details:
          "Krishna Engineering College, Ghaziabad December 11-12, 2020. Published in IOP Material Science & Engineering - Conference Series (Scopus Indexed)",
      },
      {
        title:
          "Thermal deterioration of P.M.M.A. nano-composites induced Kaolinite clay mineral exhibits reduced peak heat release rate",
        conference:
          "6th International Conference on Chip, Circuitry, Current, Coding, Combustion & Composite™ - ITC-2018",
        year: "2018",
        details:
          "Sri Sairam College of Engineering at Bengaluru, Karnataka on 28th and 29th November 2018, UGC",
      },
      {
        title:
          "Experimental investigation of wire EDM machining performance of in-situ hybrid metal matrix composite using response surface methodology and desirability approach",
        conference:
          "International Conference on Advances in Materials & Manufacturing (ICAMM-2016)",
        year: "2016",
        details:
          "December 8-10, 2016, Hyderabad: INDIA, e-ISBN 978-88-8525-19-35, UGC",
      },
      {
        title:
          "Applicability of Freundlich and Langmuir Model in the Removal of Emulation Oil",
        conference: "International Conference on Separation Processes",
        year: "2009",
        details:
          "Chemical Engineering Department, Institute of Technology (Banaras Hindu University), Varanasi, October 20-22, 2009, UGC",
      },
      {
        title: "Eco-Friendly Disposal of Special Cutting Fluid",
        conference:
          "International Conference on Challenges and Strategies for Sustainable Energy, Efficiency and Environment",
        year: "2006",
        details:
          "Organized by Uttar Pradesh Technical University, Lucknow, June 10-11, 2006, UGC",
      },
    ],
  };

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
          <FaBook className="mr-3" /> Publications
        </h1>
        <div className={`h-1 w-20 ${theme.primaryBg} rounded-full`}></div>
      </motion.div>

      {/* Overview Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} text-center`}
        >
          <FaGlobe className={`text-4xl mb-3 mx-auto ${theme.secondary}`} />
          <h3 className={`text-xl font-semibold ${theme.text}`}>
            International Journals
          </h3>
          <p className={theme.accent}>23 Publications</p>
          <p className={`${theme.text} text-sm mt-2`}>
            SCOPUS, SCIE, ESCI Indexed
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} text-center`}
        >
          <FaGraduationCap
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-xl font-semibold ${theme.text}`}>
            National Journals
          </h3>
          <p className={theme.accent}>7 Publications</p>
          <p className={`${theme.text} text-sm mt-2`}>UGC, SCOPUS Indexed</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} text-center`}
        >
          <FaUniversity
            className={`text-4xl mb-3 mx-auto ${theme.secondary}`}
          />
          <h3 className={`text-xl font-semibold ${theme.text}`}>Conferences</h3>
          <p className={theme.accent}>12+ International Conferences</p>
          <p className={`${theme.text} text-sm mt-2`}>
            Springer, IEEE, IOP Proceedings
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`${theme.cardBg} p-6 rounded-xl ${theme.shadow} text-center`}
        >
          <FaFileAlt className={`text-4xl mb-3 mx-auto ${theme.secondary}`} />
          <h3 className={`text-xl font-semibold ${theme.text}`}>
            Book Chapters
          </h3>
          <p className={theme.accent}>4 Contributions</p>
          <p className={`${theme.text} text-sm mt-2`}>
            Published with Springer
          </p>
        </motion.div>
      </motion.div>

      {/* International Journal Publications */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaGlobe className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            International Journal Publications
          </h2>
        </div>

        <div className="space-y-4">
          {publications.internationalJournals.map((pub, index) => (
            <motion.div
              key={`international-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span className={`${theme.accent} mr-3`}>{pub.journal}</span>
                <span className={`${theme.accent} text-sm`}>{pub.year}</span>
              </div>
              <p className={`${theme.text} text-sm mt-2`}>{pub.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* National Journal Publications */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaGraduationCap className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            National Journal Publications
          </h2>
        </div>

        <div className="space-y-4">
          {publications.nationalJournals.map((pub, index) => (
            <motion.div
              key={`national-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span className={`${theme.accent} mr-3`}>{pub.journal}</span>
                <span className={`${theme.accent} text-sm`}>{pub.year}</span>
              </div>
              <p className={`${theme.text} text-sm mt-2`}>{pub.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Conference Publications */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaUniversity className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Conference Papers
          </h2>
        </div>

        <div className="space-y-4">
          {publications.conferences.map((pub, index) => (
            <motion.div
              key={`conf-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span className={`${theme.accent} mr-3`}>{pub.conference}</span>
                <span className={`${theme.accent} text-sm`}>{pub.year}</span>
              </div>
              <p className={`${theme.text} text-sm mt-2`}>{pub.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Book Chapters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center mb-6">
          <FaBook className={`text-3xl mr-3 ${theme.secondary}`} />
          <h2 className={`text-2xl font-semibold ${theme.primary}`}>
            Book Chapters
          </h2>
        </div>

        <div className="space-y-4">
          {publications.bookChapters.map((pub, index) => (
            <motion.div
              key={`book-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              whileHover={{ scale: 1.01 }}
              className={`${theme.cardBg} p-5 rounded-lg ${theme.shadow} ${theme.border} border-l-4 ${theme.secondary}`}
            >
              <h3 className={`text-lg font-semibold ${theme.text}`}>
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center mt-2">
                <span className={`${theme.accent} mr-3`}>{pub.publisher}</span>
                <span className={`${theme.accent} text-sm`}>{pub.year}</span>
              </div>
              <p className={`${theme.text} text-sm mt-2`}>{pub.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
