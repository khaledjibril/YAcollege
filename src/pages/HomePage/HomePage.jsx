import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero} role="banner" aria-label="Welcome hero">
        <div className={styles.content}>
          <h1>Welcome to<br />Yan Albarka College</h1>
          <p className={styles.lead}>
            We provide a supportive and enriching environment for our students to excel academically and personally.
          </p>
          <a className={styles.cta} href="/about">Learn more</a>
        </div>
      </section>

      {/* Quick Links */}
      <div className={styles['quick-links']} role="navigation" aria-label="Quick links">
        <a href="/admission" className={styles['ql-item']} title="Admissions">
          <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="2" /><rect x="3" y="11" width="18" height="2" /><rect x="3" y="16" width="18" height="2" /></svg>
          Admissions
        </a>
        <a href="/programs" className={styles['ql-item']} title="Programs">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3" /><path d="M5 20c1-4 5-6 7-6s6 2 7 6" /></svg>
          Programs
        </a>
        <a href="/fees" className={styles['ql-item']} title="Fees">
          <svg viewBox="0 0 24 24"><path d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" /></svg>
          Fees
        </a>
        <a href="/calendar" className={styles['ql-item']} title="Calendar">
          <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></svg>
          Calendar
        </a>
      </div>

      <main>
        {/* Latest News */}
        <section aria-labelledby="news-title">
          <h2 id="news-title" className={styles['section-title']}>Latest News &amp; Events</h2>
          <div className={styles['card-row']} role="list">
            <div className={styles['nes-card']} role="listitem" aria-label="News 1">
              <div className={`${styles['image-boxNews']} ${styles['image-box1']}`}></div>
              <p className={styles.smallText}>Yan Albarka College has introduced a new program title: Kuttab. Check programs for more!!</p></div>
            <div className={styles['nes-card']} role="listitem" aria-label="News 2">
                <div className={`${styles['image-boxNews']} ${styles['image-box4']}`}></div>
                 <p className={styles.smallText}>Yan Albarka College is very keen and maintain core principles when it comes to islamic teachings. Check programs for more!!</p>
            </div>
            <div className={styles['nes-card']} role="listitem" aria-label="News 3">
              <div className={`${styles['image-boxNews']} ${styles['image-box5']}`}></div>
              <p className={styles.smallText}>Yan Albarka College has initiated a program for adult education! To increase arabic literacy level!!</p>
</div>
            <div className={styles['nes-card']} role="listitem" aria-label="News 4">
            <div className={`${styles['image-boxNews']} ${styles['image-box6']}`}></div>
              <p className={styles.smallText}>Yan Albarka College during an excursion. Check programs for more!!</p>
            </div>
          </div>

          
          <a className={styles['see-more']} href="/programs" role="button">Click to see more</a>
        </section>

        {/* Our Programs */}
        <section aria-labelledby="programs-title" style={{ marginTop: '36px' }}>
          <h2 id="programs-title" className={styles['section-title']}>Our Programs</h2>
          <div className={styles['card-row']}>
            <div className={styles['news-card']} aria-label="Program 1">
                          <div className={`${styles['image-box']} ${styles['image-box1']}`}></div>
              <h3 style={{textAlign:'center', padding: '5px' }}>Kuttab <br></br>(Integrated Nursery)</h3>
            </div>
            <div className={styles['news-card']} aria-label="Program 2">
                          <div className={`${styles['image-box']} ${styles['image-box2']}`}></div>
              <h3 style={{textAlign:'center', padding: '5px'  }}>Lower &amp; Upper Basics Creche</h3>
            </div>
            <div className={styles['news-card']} aria-label="Program 3">
                         <div className={`${styles['image-box']} ${styles['image-box3']}`}></div>
              <h3 style={{ textAlign:'center', padding: '5px'  }}>Tahfizul Qur'an &amp; Sunnah</h3>
            </div>
            <div className={styles['news-card']} aria-label="Program 4">
                        <div className={`${styles['image-box']} ${styles['image-box4']}`}></div>
              <h3 style={{ textAlign:'center', padding: '5px'  }}>Madrasa (Islamiyyah)</h3>
            </div>
          </div>
          <a className={styles['see-more']} href="/programs" role="button">Click to see more</a>
        </section>

        {/* About */}
        <section aria-labelledby="about-title" style={{ marginTop: '36px' }}>
          <h2 id="about-title" className={styles['section-title']}>About Yan Albarka</h2>
          <div className={styles['two-col']}>
            <div className={styles['about-left']}>
              <p className={styles['muted-small']}>
                Yan Albarka College is a purpose-driven educational institution committed to raising morally upright, academically excellent, and socially responsible individuals. Rooted in Islamic values and inspired by a legacy of visionary thinking, the College was founded through the dream of Dr. M.N. Abdullahi, and fully came to life in 2020.
                <br /><br />
                Our name, “Yan Albarka,” meaning “People of Blessing,” reflects our deep focus on nurturing students who will be a source of goodness to their families, communities, and the world at large.
                <br /><br />
                We aim to revive the legacy of knowledge, character, and leadership once upheld by the Muslim Ummah; making us not just a school, but a movement committed to excellence in both this world and the hereafter.
              </p>
              <div style={{ height: '10px' }}></div>
              <a href="/about" className={styles['see-more']} style={{ borderRadius: '12px', padding: '2px 16px' }}>Read more</a>
            </div>
            <div className={styles['about-right']} aria-hidden="true"></div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.mission} aria-labelledby="mission-title">
          <div className={styles.box} aria-hidden="true"></div>
          <div className={styles.text}>
            <h3 id="mission-title" style={{ fontSize: '22px', color: 'var(--brown-medium)', margin: '0 0 8px', fontFamily: 'Playfair Display,serif' }}>Our Mission &amp; Vision</h3>
            <p className={styles['muted-small']}>
              <strong>Vision:</strong><br />
              To be among the leading educational institutions in Nigeria and neighboring countries in Piety, Good Character, and Academic Excellence for success in this world and the hereafter.
              <br /><br />
              <strong>Mission:</strong><br />
              To revive the legacy of the Muslim Ummah in Education, Capacity Building, and Leadership by raising a competent, virtuous generation.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
