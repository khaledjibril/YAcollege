import React from "react";
import styles from "./AboutPage.module.css";
import crest from "../AboutPage/assets/crest.png"; // large seal / crest (place file here)

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <main className={styles.container}>
        {/* Hero / About */}
        <section className={styles.hero} aria-labelledby="about-heading">
          <div className={styles.leftPanel}>
            <h1 id="about-heading" className={styles.h1}>About Us</h1>
            <div className={styles.h1Underline} aria-hidden="true" />

            <p className={styles.lead}>
              Yan Albarka College is a purpose-driven educational institution committed to raising morally upright, academically excellent, and socially responsible individuals. Rooted in Islamic values and inspired by a legacy of visionary thinking, the College was founded through the dream of Dr. M.N. Abdullahi, and fully came to life in 2020. 
              Our name, “Yan Albarka,” meaning “People of Blessing,” reflects our deep focus on nurturing students who will be a source of goodness to their families, communities, and the world at large.
              <br></br>
              We aim to revive the legacy of knowledge, character, and leadership once upheld by the Muslim Ummah; making us not just a school, but a movement committed to excellence in both this world and the hereafter.
              Established with a vision to provide quality education, Yan Albarka College has been nurturing young minds and building future
              leaders. Our commitment to excellence, innovation, and character development makes us a preferred choice for quality education.
            </p>

            <h2 className={styles.missionTitle}>Our Mission</h2>
            <div className={styles.h1UnderlineSmall} aria-hidden="true" />

            <p className={styles.missionText}>
              To provide accessible, quality education that empowers students with knowledge, skills, and values necessary for personal growth
              and societal contribution. Vision: To be a leading educational institution recognized for excellence in teaching, learning, and
              community development.
            </p>
          </div>

          {/* Right panel: large translucent watermark */}
          <div
            className={styles.rightPanel}
            role="img"
            aria-label="Decorative watermark background"
            style={{ backgroundImage: `url(${crest})` }}
          />
        </section>

        {/* brown strip divider (matches screenshot) */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Team section */}
        <section className={styles.teamSection} aria-labelledby="team-heading">
          <h3 id="team-heading" className={styles.teamTitle}>Meet Our Team</h3>
          <p className={styles.teamSub}>
            Our dedicated faculty and staff are committed to supporting student's academic and personal growth.
          </p>

          <div className={styles.teamGrid} role="list">
            <div className={styles.topCard} role="listitem" aria-hidden="true" />

            <div className={styles.row} role="list">
              <div className={styles.card} role="listitem" />
              <div className={styles.card} role="listitem" />
              <div className={styles.card} role="listitem" />
              <div className={styles.card} role="listitem" />
            </div>

            <div className={`${styles.row} ${styles.rowBottom}`} role="list">
              <div className={styles.card} role="listitem" />
              <div className={styles.card} role="listitem" />
              <div className={styles.card} role="listitem" />
              <div className={styles.card} role="listitem" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
