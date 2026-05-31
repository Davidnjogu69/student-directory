import styles from "./StudentCard.module.css";

function StudentCard({
  name,
  email,
  phase,
  status,
  skills,
}) {
  const statusClass = {
    active: styles.active,
    inactive: styles.inactive,
    suspended: styles.suspended,
  };

  const cardClass = {
    active: styles.cardActive,
    inactive: styles.cardInactive,
    suspended: styles.cardSuspended,
  };

  const viewProfile = () => {
    alert(`${name}\n${email}`);
  };

  return (
    <div className={`${styles.card} ${cardClass[status] || ""}`}>
      <h2>{name}</h2>

      <p>{email}</p>

      <p>Phase {phase}</p>

      <span className={statusClass[status]}>
        {status}
      </span>

      <div className={styles.skills}>
        {skills.map(skill => (
          <span
            key={skill}
            className={styles.skill}
          >
            {skill}
          </span>
        ))}
      </div>

      <button onClick={viewProfile}>
        View Profile
      </button>
    </div>
  );
}

export default StudentCard;