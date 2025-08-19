import React, { useState } from 'react';
import styles from './ProgramsPage.module.css';
import { Link } from "react-router-dom";
import { 
  FaMoneyBillWave,
  FaSearch,
  FaUserGraduate, 
  FaCalendarAlt, 
  FaPaperPlane, 
  FaUserTie 
} from "react-icons/fa";

function ProgramsPage() {
  // State to track which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Function to toggle card
  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const programs = [
    {
      title: "Kuttab (Integrated Nursery)",
      desc: "Comprehensive program covering management principles, entrepreneurship, and business strategy for future leaders.",
      image: styles['image-box1'],
    },
    {
      title: "Lower & Upper Basics Creche",
      desc: "Early childhood education that builds strong academic foundations, nurtures creativity, and develops essential life skills in a supportive environment.",
      image: styles['image-box2'],
    },
    {
      title: "Tahfizul Qur'an & Sunnah",
      desc: "A structured program for memorizing the Qur’an and learning the Sunnah with proper understanding, discipline, and spiritual guidance.",
      image: styles['image-box3'],
    },
    {
      title: "Madrasa (Islamiyyah)",
      desc: "Focused on Islamic studies, values, and character building while integrating academic learning for a balanced education.",
      image: styles['image-box4'],
    },
    {
      title: "Adult Classes (Arabic, Marital Life, Children Upbringing, etc.)",
      desc: "Special courses designed for adults to enhance knowledge in Arabic, family life, parenting, and other practical areas of personal growth.",
      image: styles['image-box5'],
    },
    {
      title: "Rashid GAP year Program",
      desc: "A life-enriching program that equips young adults with skills, discipline, and exposure before pursuing higher education or career paths.",
      image: styles['image-box6'],
    },
    {
      title: "Skills Acquisition",
      desc: "Hands-on training in various vocational and technical skills to empower learners with practical knowledge for entrepreneurship and self-reliance.",
      image: styles['image-box7'],
    },
    {
      title: "Capacity Building & Personality Development",
      desc: "Workshops and training sessions aimed at enhancing leadership, confidence, and personal growth to prepare individuals for real-world challenges.",
      image: styles['image-box8'],
    },
    {
      title: "Vacation Edutainments",
      desc: "Engaging holiday programs that blend education with fun activities, keeping children productive, creative, and socially active during breaks.",
      image: styles['image-box9'],
    },
    {
      title: "Extra Curricular Activities",
      desc: "A wide range of sports, clubs, and creative activities to promote teamwork, talent discovery, and holistic development beyond the classroom.",
      image: styles['image-box10'],
    },
  ];

  return (
    <div>
      {/* ---- Banner ---- */}
      <section className={styles['programs-banner']}>
        <div className={styles['programs-box']}>
          <div className={`${styles['image-boxHero']} ${styles['image-box']}`}></div>
          <div>
            <h1>Programs</h1>
            <p>
              Choose a program that fits your goals. Click a card to see details, 
              entry requirements, and apply now.
            </p>
            <button className={styles['view-btn']}>View Details</button>
          </div>
        </div>
      </section>

            {/* ---- Search Bar ---- */}
            <div className={styles['search-bar']}>
          <FaSearch className={styles['icon-search']} aria-label="search" />
          <input type="text" placeholder="Search programs" />
        </div>

        
      {/* ---- Main Content ---- */}
      <section className={styles.content}>
        {/* ---- Programs Grid ---- */}
        <div className={styles.programs}>
          {programs.map((program, index) => (
            <div className={styles['program-card']} key={index}>
              <div className={`${styles['image-box']} ${program.image}`}></div>
              <h3>{program.title}</h3>
              
              {/* Show description only if expanded */}
              {expandedCard === index && <p>{program.desc}</p>}

              <button 
                className={styles['details-btn']} 
                onClick={() => toggleCard(index)}
              >
                {expandedCard === index ? "View Less" : "Details"}
              </button>
            </div>
          ))}
        </div>

        {/* ---- Sidebar ---- */}
        <aside className={styles.sidebar}>
          <div className={styles['sidebar-box']}>
            <h3>Quick links</h3>
            <ul>
              <li>
                <Link to="/fees">
                  <FaMoneyBillWave className={styles.icon} /> Fee Structure
                </Link>
              </li>
              <li>
                <Link to="/admission">
                  <FaUserGraduate className={styles.icon} /> Admissions
                </Link>
              </li>
              <li>
                <Link to="/calendar">
                  <FaCalendarAlt className={styles.icon} /> Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles['sidebar-box']}>
            <h3>Apply Now</h3>
            <Link to="/apply">
              <button>
                <FaPaperPlane className={styles.iconBtn} /> Apply
              </button>
            </Link>
          </div>

          <div className={styles['sidebar-box']}>
            <h3>Not sure which program suits you?</h3>
            <p>
              <span className={styles.highlight}>
                Talk to our admissions advisor for guidance
              </span>
            </p>
            <Link to="/contact">
              <button>
                <FaUserTie className={styles.iconBtn} /> Contact an advisor
              </button>
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default ProgramsPage;
