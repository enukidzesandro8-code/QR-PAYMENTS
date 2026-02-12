import styles from './BillItems.module.css';

export default function BillItems({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <div key={item.id} className={styles.row}>
          <span className={styles.name}>
            {item.quantity > 1 && (
              <span className={styles.qty}>{item.quantity}x </span>
            )}
            {item.quantity === 1 && (
              <span className={styles.qty}>1x </span>
            )}
            {item.name}
          </span>
          <span className={styles.price}>
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}
