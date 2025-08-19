import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.topbar} aria-hidden="true"></div>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          <span className={styles.logo} aria-hidden="true"></span>
          <div className={styles.titleGroup}>
            <span className={styles.title}>YAN ALBARKA</span>
            <span className={styles.sub}>COLLEGE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink>
          <NavLink to="/programs" className={({ isActive }) => isActive ? styles.active : undefined}>Programs</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.active : undefined}>Gallery</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? styles.active : undefined}>Events</NavLink>
          <NavLink to="/news" className={({ isActive }) => isActive ? styles.active : undefined}>News</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : undefined}>Contact</NavLink>
          <Link to="/apply" className={styles.apply}>Apply</Link>
        </nav>

        {/* Burger Button */}
        <button
          className={styles.burgerButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            // Close icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <line x1="5" y1="5" x2="19" y2="19" stroke="#444" strokeWidth="2" strokeLinecap="round" />
              <line x1="5" y1="19" x2="19" y2="5" stroke="#444" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Burger icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="2" rx="1" fill="#444" />
              <rect x="3" y="11" width="18" height="2" rx="1" fill="#444" />
              <rect x="3" y="16" width="18" height="2" rx="1" fill="#444" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with Overlay */}
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={closeMenu}></div>
          <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`} aria-label="Mobile navigation">
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink>
            <NavLink to="/programs" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>Programs</NavLink>
            <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>Gallery</NavLink>
            <NavLink to="/events" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>Events</NavLink>
            <NavLink to="/news" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>News</NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>Contact</NavLink>
            <Link to="/apply" className={styles.apply} onClick={closeMenu}>Apply</Link>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
