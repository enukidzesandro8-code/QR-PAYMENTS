import styles from './PaymentModal.module.css';

export default function PaymentModal({ onClose, onSplit, onPayFull }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={e => e.stopPropagation()}>
        <div className="sheetHandle" />

        <div className="sheetHeader">
          <span className="sheetTitle">გადაიხადე ანგარიში</span>
          <button className="iconBtn" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        <div className="sheetDivider" />

        <div className={styles.body}>
          <button className={styles.optionBtn} onClick={onSplit}>
            გაყავი ანგარიში
          </button>
          <button className={styles.optionBtn} onClick={onPayFull}>
            სრული ანგარიშის გადახდა
          </button>
        </div>
      </div>
    </div>
  );
}
