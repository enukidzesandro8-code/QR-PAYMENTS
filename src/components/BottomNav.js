import styles from './BottomNav.module.css';

export default function BottomNav({ activePage = 'pay' }) {
  return (
    <nav className={styles.nav}>
      <button className={`${styles.tab} ${activePage === 'menu' ? styles.active : ''}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <span>მენიუ</span>
      </button>
      <button className={`${styles.tab} ${activePage === 'pay' ? styles.active : ''}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
        <span>გადახდა</span>
      </button>
    </nav>
  );
}
