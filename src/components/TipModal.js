import styles from './TipModal.module.css';

const TIP_OPTIONS = [
  { label: '5%', value: 0.05 },
  { label: '10%', value: 0.10 },
  { label: '12%', value: 0.12 },
];

export default function TipModal({ amount, onConfirm, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={e => e.stopPropagation()}>
        <div className="sheetHandle" />

        <div className="sheetHeader">
          <span className="sheetTitle">ჩაი დაამატო?</span>
          <button className="iconBtn" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        <div className="sheetDivider" />

        <div className={styles.body}>
          <p className={styles.subtitle}>აირჩიე ჩაის ოდენობა მომსახურისთვის</p>

          <div className={styles.tipGrid}>
            {TIP_OPTIONS.map(opt => (
              <button
                key={opt.label}
                className={styles.tipBtn}
                onClick={() => onConfirm(opt.value)}
              >
                <span className={styles.tipPercent}>{opt.label}</span>
                <span className={styles.tipAmount}>₾{(amount * opt.value).toFixed(2)}</span>
              </button>
            ))}
          </div>

          <button className={styles.noThanksBtn} onClick={() => onConfirm(0)}>
            არა, მადლობა
          </button>
        </div>
      </div>
    </div>
  );
}
