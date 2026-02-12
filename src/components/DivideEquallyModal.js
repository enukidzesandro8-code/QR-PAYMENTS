'use client';

import styles from './DivideEquallyModal.module.css';

export default function DivideEquallyModal({
  totalAmount,
  numPeople,
  setNumPeople,
  onClose,
  onBack,
  onConfirm,
}) {
  const perPerson = totalAmount / numPeople;

  const decrement = () => {
    if (numPeople > 2) setNumPeople(n => n - 1);
  };

  const increment = () => {
    if (numPeople < 20) setNumPeople(n => n + 1);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={e => e.stopPropagation()}>
        <div className="sheetHandle" />

        <div className="sheetHeader">
          <button className="iconBtn" onClick={onBack} aria-label="Back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="10 3 5 8 10 13" />
            </svg>
          </button>
          <span className="sheetTitle">თანაბრად გაყოფა</span>
          <button className="iconBtn" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        <div className="sheetDivider" />

        <div className={styles.body}>
          <p className={styles.question}>რამდენი ადამიანი ყოფს ანგარიშს?</p>

          <div className={styles.counter}>
            <button
              className={`${styles.counterBtn} ${numPeople <= 2 ? styles.counterBtnDisabled : ''}`}
              onClick={decrement}
              disabled={numPeople <= 2}
              aria-label="Decrease"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="8" x2="13" y2="8" />
              </svg>
            </button>
            <span className={styles.counterValue}>{numPeople}</span>
            <button
              className={`${styles.counterBtn} ${numPeople >= 20 ? styles.counterBtnDisabled : ''}`}
              onClick={increment}
              disabled={numPeople >= 20}
              aria-label="Increase"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="8" y1="3" x2="8" y2="13" />
                <line x1="3" y1="8" x2="13" y2="8" />
              </svg>
            </button>
          </div>

          <div className={styles.perPersonCard}>
            <span className={styles.perPersonLabel}>თითოეული პირი იხდის</span>
            <span className={styles.perPersonAmount}>₾{perPerson.toFixed(2)}</span>
          </div>

          <div className={styles.totalNote}>
            სულ ანგარიში: <strong>₾{totalAmount.toFixed(2)}</strong> ÷ {numPeople} ადამიანი
          </div>

          <button className={styles.payBtn} onClick={onConfirm}>
            გადახდა ₾{perPerson.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
