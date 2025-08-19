import React, { useState } from 'react';
import styles from './GalleryPage.module.css';
import { Link } from "react-router-dom";
import { 
  FaMoneyBillWave,
  FaSearch,
  FaUserGraduate, 
  FaCalendarAlt, 
  FaPaperPlane, 
  FaUserTie 
} from "react-icons/fa";

function GalleryPage() {
  const [showAll, setShowAll] = useState(false);

  const galleryCards = [
    { id: 1, title: "Students during a photo session", image: styles.card7 },
    { id: 2, title: "Students posing for the camera", image: styles.card8 },
    { id: 3, title: "During an ice-breaker", image: styles.card1 },
    { id: 4, title: "Students with smiling faces", image: styles.card2 },
    { id: 5, title: "Event 3", image: styles.card3 },
    { id: 6, title: "Event 4", image: styles.card4 },
    { id: 7, title: "Event 5", image: styles.card5 },
    { id: 8, title: "Event 6", image: styles.card6 },
    { id: 9, title: "Event 7", image: styles.card7 },
    { id: 10, title: "Event 8", image: styles.card8 },
    { id: 11, title: "Event 9", image: styles.card9 },
    { id: 12, title: "Event 10", image: styles.card10 },
    { id: 13, title: "Event 11", image: styles.card11 },
    { id: 14, title: "Event 12", image: styles.card12 },
    { id: 15, title: "Event 13", image: styles.card13 },
    { id: 16, title: "Event 14", image: styles.card14 },
  ];

  // Determine which cards to display
  const displayedCards = showAll ? galleryCards : galleryCards.slice(0, 4);

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>Gallery</h1>
          <p>Browse photos to explore our school, students, events, and daily life</p>
          <button className={styles["btn-albums"]}>View Albums</button>
        </div>
        <div className={styles["hero-image"]}>
          <img src="/assets/logo.png" alt="School Gallery" />
        </div>
      </section>

      {/* ---- Search Bar ---- */}
      <div className={styles['search-bar']}>
        <FaSearch className={styles['icon-search']} aria-label="search" />
        <input type="text" placeholder="Search programs" />
      </div>

      <section className={styles.content}>
        <div className={styles.left}>
          <div className={styles['card-grid']}>
            {displayedCards.map((card) => (
              <div key={card.id}>
                <div className={styles.card}>
                  <div className={card.image}></div>
                </div>
                <p>{card.title}</p>
              </div>
            ))}
          </div>

          {/* View More / View Less Button */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button 
              className={styles['btn-read']} 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
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

export default GalleryPage;
