import styles from './SuccessScreen.module.css';

export default function SuccessScreen({ amount, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.iconWrap}>
          <div className={styles.iconCircle}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 18 14 26 30 10" />
            </svg>
          </div>
        </div>

        <h2 className={styles.title}>გადახდა წარმატებულია</h2>
        {amount != null && (
          <p className={styles.amount}>₾{amount.toFixed(2)}</p>
        )}
        <p className={styles.subtitle}>
          თქვენი გადახდა წარმატებით განხორციელდა. გემრიელად!
        </p>

        <button className={styles.doneBtn} onClick={onClose}>
          დასრულება
        </button>
      </div>
    </div>
  );
}
