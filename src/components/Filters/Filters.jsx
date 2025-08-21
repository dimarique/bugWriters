import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <form action="">
        <input type="number" placeholder="from" />
        <input type="number" placeholder="to" />
      </form>
    </div>
  );
};

export default Filters;
