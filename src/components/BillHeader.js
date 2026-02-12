import styles from './BillHeader.module.css';

export default function BillHeader({ restaurant }) {
  return (
    <div className={styles.header}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.logo}>
          <span className={styles.logoText}>
            {restaurant.name.split(' ').map(w => w[0]).join('')}
          </span>
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{restaurant.name}</h1>
          <p className={styles.subtitle}>{restaurant.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
