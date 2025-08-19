import React from "react";
import styles from "./ContactPage.module.css";

export default function ContactReplica() {
  return (
    <div className={styles.contactPage}>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="contact-title">
        <h1 id="contact-title">Contact Us</h1>
      </section>

      {/* Main two-column content */}
      <section className={styles.content}>
        {/* Left: Contact info */}
        <div className={styles.info}>
          <h2>Contact Information</h2>

          <ul className={styles.infoList}>
            <li>
              <span className={styles.icon} aria-hidden>
                {/* phone */}
                <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2a1 1 0 011.1-.24c1.2.48 2.5.74 3.7.74a1 1 0 011 1v3.4a1 1 0 01-1 1C11.1 20.3 3.7 12.9 3.7 3.7a1 1 0 011-1H8a1 1 0 011 1c0 1.2.26 2.5.74 3.7a1 1 0 01-.24 1.1l-2 2z"/></svg>
              </span>
              <a href="tel:+2348068229599">+2348068229599</a>
            </li>

            <li>
              <span className={styles.icon} aria-hidden>
                {/* email */}
                <svg viewBox="0 0 24 24"><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.4l-10 6.2L2 6.4V6zm0 3.5l9.4 5.8a1 1 0 001.2 0L22 9.5V18a2 2 0 01-2 2H4a2 2 0 01-2-2V9.5z"/></svg>
              </span>
              <a href="mailto:contact@yanalbarkacollege.com">
                contact@yanalbarkacollege.com
              </a>
            </li>

            <li>
              <span className={styles.icon} aria-hidden>
                {/* location */}
                <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
              </span>
              <span>Text goes here</span>
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className={styles.formSide}>
          <h2>Send Us a Message</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="" aria-label="Full Name" />
            <input type="email" placeholder="" aria-label="Email" />
            <input type="text" placeholder="" aria-label="Subject" />
            <textarea rows="6" placeholder="" aria-label="Message" />
            <button type="submit">Send Messsage</button>
          </form>
        </div>
      </section>

      {/* Location section */}
      <section className={styles.location}>
        <h2>Our Location</h2>
        <div className={styles.mapBox}>
          <p>Picture of Location on Google Map</p>
        </div>
      </section>
    </div>
  );
}
