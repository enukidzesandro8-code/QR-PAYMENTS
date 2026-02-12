import styles from './BillBanner.module.css';

export default function BillBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <p className={styles.title}>Enjoy exclusive benefits!</p>
        <p className={styles.subtitle}>
          Sign in and earn exclusive rewards for every purchase
        </p>
      </div>
      <button className={styles.loginBtn}>Log in</button>
    </div>
  );
}
