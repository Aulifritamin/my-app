import styles from "./Dashboard.module.scss";
import { useAppSelector } from "app/hooks";


const Dashboard = () => {

const totalSpendStore = useAppSelector((state) => state.transactions);

  const totalSpend = totalSpendStore.length > 0
  ? totalSpendStore.map((item) => item.amountSpent).reduce((a, b) => a + b)
  : 0;
  return (
    <>
      <div className={styles.dashboard}>
        <h2>Total Spend</h2>
        <div>{totalSpend}</div>
      </div>
      <div className={styles.dashboard}>invoices</div>
      <div className={styles.dashboard}>total spending</div>
      <div className={styles.dashboard}>balance</div>
    </>
  );
};

export default Dashboard;