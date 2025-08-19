import React, { useRef } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const emailRef = useRef(null);

  function handleSubscribe(e){
    e.preventDefault();
    const em = emailRef.current?.value || 'your email';
    alert("Thanks! We'll send updates to " + em);
    if (emailRef.current) emailRef.current.value = '';
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <h4>Contact Us</h4>
            <p>Official WhatsApp Number:<br/>+2345085229599</p>
            <p>Email Address:<br/>contact@yanalbarkacollege.com</p>
          </div>

          <div className={styles.footerCol}>
            <h4>Support Us</h4>
            <p>Follow us on the following pages:</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" aria-label="TikTok"><i className="fab fa-tiktok fa-lg"></i></a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4>Subscribe for the latest updates</h4>
            <form onSubmit={handleSubscribe} style={{marginTop:'8px',display:'flex',gap:'10px',alignItems:'center'}}>
              <input ref={emailRef} type="email" placeholder="Your Email Address" style={{padding:'10px',borderRadius:'20px',border:'1px solid rgba(0,0,0,0.06)',flex:1}} />
              <button type="submit" className={styles.subscribeBtn}>Submit</button>
            </form>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>© 2025 Yan Albarka College. All rights reserved.</div>
    </>
  );
}

export default Footer; 