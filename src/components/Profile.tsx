import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/aliendev66.png" alt="Domingos Capitango" />
      <div>
        <strong>Domingos Capitango</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level 5
        </p>
      </div>
    </div>
  );
}
