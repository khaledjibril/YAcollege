import React from "react";
import styles from "./EventPage.module.css";



export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Orientation Week 2025",
      date: "April 2, 2025",
      desc:
        "Welcome new students with comprehensive orientation sessions, campus tours, and introductory workshops designed to help students settle into college life.",
    },
    {
      id: 2,
      title: "Annual Science Fair",
      date: "April 2, 2025",
      desc:
        "Students showcase innovative projects and research work in science and technology. Open to public with interactive demonstrations and competitions.",
    },
    {
      id: 3,
      title: "Career Development Workshop",
      date: "April 2, 2025",
      desc:
        "Professional development sessions featuring industry experts, resume building workshops, and networking opportunities for final year students.",
    },
    {
      id: 4,
      title: "Cultural Festival",
      date: "April 2, 2025",
      desc:
        "Celebration of diversity and cultural heritage featuring performances, traditional foods, and artistic exhibitions from our multicultural student community.",
    },
  ];

  return (
    <main className={styles.page}>
      {/* Hero / Banner */}
      <section className={styles.hero} aria-labelledby="events-title">
        <div className={styles.heroInner}>
          <h1 id="events-title" className={styles.title}>
            Events
          </h1>
          <p className={styles.lead}>Find out about our upcoming events</p>
          <button className={styles.ctaBtn}>View Calendar</button>
        </div>
      </section>

      {/* Events list */}
      <section className={styles.eventsList} aria-label="Events list">
        {events.map((ev) => (
          <article key={ev.id} className={styles.eventRow}>
            <div className={styles.thumb} aria-hidden="true" />
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>{ev.title}</h2>
              <div className={styles.eventDate}>{ev.date}</div>
              <p className={styles.eventDesc}>{ev.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
