import React from "react";
import styles from "./NewsPage.module.css";
import { Link } from "react-router-dom";
import { 
  FaMoneyBillWave,
  FaSearch,
  FaUserGraduate, 
  FaCalendarAlt, 
  FaPaperPlane, 
  FaUserTie 
} from "react-icons/fa";


export default function NewsPage() {
const articles = [
  {
    id: 1,
    title: "Orientation Week 2025",
    excerpt:
      "Welcome new students with comprehensive orientation sessions, campus tours, and introductory workshops designed to help students settle into college life.",
    imageClass: 'image-box4',
  },
  {
    id: 2,
    title: "Annual Science Fair",
    excerpt:
      "Students showcase innovative projects and research work in science and technology. Open to public with interactive demonstrations and competitions.",
    imageClass: 'image-box4',
  },
  {
    id: 3,
    title: "Community Outreach",
    excerpt:
      "Our volunteers joined a local health initiative providing free screenings and wellness education to nearby neighborhoods.",
    imageClass: 'image-box4',
  },
  {
    id: 4,
    title: "New Research Grants Awarded",
    excerpt:
      "Faculty secured grants for student-led research across AI and renewable energy, fostering hands-on opportunities and industry partnerships.",
    imageClass: 'image-box4',
  },
];


  return (
    <main className={styles.page}>
      {/* HERO with watermark and CTA */}
      <section className={styles.hero} aria-labelledby="news-title">
        <div className={styles.heroInner}>
          <h1 id="news-title" className={styles.title}>
            News
          </h1>
          <p className={styles.lead}>
            Check out the latest News from our College
            <br />
            Click on the article to read more.
          </p>
          <button className={styles.readMoreBtn}>Read More</button>
        </div>
      </section>

      {/* ---- Search Bar ---- */}
      <div className={styles['search-bar']}>
        <FaSearch className={styles['icon-search']} aria-label="search" />
        <input type="text" placeholder="Search programs" />
      </div>

      {/* Content grid */}
        <section className={styles.contentGrid} aria-label="news content">
          <div className={styles.articles}>
            {articles.map((a) => (
              <article key={a.id} className={styles.articleCard}>
                {/* Image box */}
                <div className={`${styles['image-boxNews']} ${styles[a.imageClass]}`}></div>

                <div className={styles.articleBody}>
                  <h3 className={styles.articleTitle}>{a.title}</h3>
                  <p className={styles.articleText}>{a.excerpt}</p>
                  <button className={styles.cardBtn}>Read More</button>
                </div>
              </article>
          ))}

          {/* second row of two cards */}
          <div className={styles.articleRow}>
            <div className={styles.smallCard}>
              <div className={`${styles['image-box']} ${styles['image-box1']}`}></div>
              <p className={styles.smallText}>Yan Albarka College has introduced a new program title: Kuttab. Check programs for more</p>
              <Link to="/programs">
                <button className={styles.cardBtn}>Read More</button>
              </Link>
            </div>

            <div className={styles.smallCard}>
              <div className={`${styles['image-box']} ${styles['image-box4']}`}></div>
              <p className={styles.smallText}>Yan Albarka College has initiated a program for adult education! To increase arabic literacy level!!</p>
              <Link to="/programs">
                <button className={styles.cardBtn}>Read More</button>
              </Link>
            </div>


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

                   <div className={styles.eventsCard}>
            <p className={styles.eventsLead}>Click the button below to see Events</p>
            <button className={styles.eventsBtn}>Events</button>
          </div>
        </aside>
      </section>
    </main>
  );
}
