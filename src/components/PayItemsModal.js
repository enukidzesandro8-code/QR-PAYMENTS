'use client';

import styles from './PayItemsModal.module.css';

export default function PayItemsModal({
  items,
  selectedItems,
  setSelectedItems,
  selectedTotal,
  onClose,
  onBack,
  onConfirm,
}) {
  const toggle = (id) => {
    setSelectedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const hasSelection = selectedItems.size > 0;

  return (
    <div className="overlay" onClick={onClose}>
      <div className={`sheet ${styles.tallSheet}`} onClick={e => e.stopPropagation()}>
        <div className="sheetHandle" />

        <div className="sheetHeader">
          <button className="iconBtn" onClick={onBack} aria-label="Back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="10 3 5 8 10 13" />
            </svg>
          </button>
          <span className="sheetTitle">გადაიხადე შენი პროდუქტები</span>
          <button className="iconBtn" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        <div className="sheetDivider" />

        {/* Scrollable item list */}
        <div className={styles.itemList}>
          {items.map((item) => {
            const selected = selectedItems.has(item.id);
            return (
              <div key={item.id} className={styles.itemRow}>
                <div className={styles.itemInfo}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>
                    ₾{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <button
                  className={`${styles.addBtn} ${selected ? styles.addBtnSelected : ''}`}
                  onClick={() => toggle(item.id)}
                  aria-label={selected ? `Remove ${item.name}` : `Add ${item.name}`}
                >
                  {selected ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 7 6 11 12 3" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="7" y1="2" x2="7" y2="12" />
                      <line x1="2" y1="7" x2="12" y2="7" />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Fixed footer */}
        <div className={styles.footer}>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>სულ ანგარიში</span>
            <span className={styles.totalValue}>₾{selectedTotal.toFixed(2)}</span>
          </div>
          <button
            className={`${styles.confirmBtn} ${!hasSelection ? styles.confirmBtnDisabled : ''}`}
            onClick={hasSelection ? onConfirm : undefined}
            disabled={!hasSelection}
          >
            დადასტურება
          </button>
        </div>
      </div>
    </div>
  );
}
