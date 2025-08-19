import React from "react";
import styles from "./AdmissionPage.module.css";



export default function AdmissionPage() {
  return (
    <main className={styles.container} role="main">
      {/* Hero / Banner with watermark */}
      <section className={styles.hero} aria-labelledby="admissions-title">
        <div className={styles.heroInner}>
          <h1 id="admissions-title" className={styles.title}>
            Admissions
          </h1>
          <p className={styles.heroLead}>
            We’re excited to have you join our community.
            <br />
            Here are the steps to apply and help you get started.
          </p>
        </div>
      </section>

      {/* Three-column sections */}
      <section className={styles.infoGrid} aria-label="admissions information">
        <article className={styles.card}>
          <h2 className={styles.sectionTitle}>Admission Requirements</h2>
          <div className={styles.cardBody}>
            {/* placeholder content — replace with real items */}
            <p className={styles.placeholder}>
              • Completed application form<br />
              • Academic transcripts<br />
              • Passport photograph<br />
              • Any additional program-specific requirements
            </p>
          </div>
        </article>

        <aside className={styles.card}>
          <h2 className={styles.sectionTitle}>Important Dates</h2>
          <div className={styles.cardBody}>
            <p className={styles.placeholder}>
              • Application opens: 01 March 2025<br />
              • Deadline: 30 June 2025<br />
              • Orientation: 01 September 2025
            </p>
          </div>
        </aside>

        <article className={styles.card}>
          <h2 className={styles.sectionTitle}>Fees &amp; Payment Information</h2>
          <div className={styles.cardBody}>
            <p className={styles.placeholder}>
              Tuition, registration, and payment plans can be found here. We
              accept bank transfer and online payments.
            </p>
          </div>
        </article>
      </section>

      {/* Large CTA banner */}
      <section className={styles.ctaWrap} aria-hidden="false">
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>Ready to Apply?</h3>
            <p className={styles.ctaSub}>
              Start your journey at Yan-Albarka College today
            </p>
          </div>
          <div className={styles.ctaAction}>
            <button className={styles.applyBtn}>Apply Now</button>
          </div>
        </div>
      </section>

      {/* Contact for enquiries */}
      <section className={styles.contactSection} aria-labelledby="contact-enquiries">
        <h2 id="contact-enquiries" className={styles.sectionTitle}>
          Contact for Enquiries
        </h2>
        <div className={styles.contactBody}>
          <p className={styles.placeholder}>
            Email: admissions@yanalbarkacollege.com<br />
            Phone: +234 XXX XXX XXXX
          </p>
        </div>
      </section>
    </main>
  );
}
