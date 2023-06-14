import { useAppSelector } from "app/hooks";
import styles from "./activity.module.scss";
import { RootState } from "app/store";
import DeleteButton from "components/AddNewTransaction/deleteTransaction";



export const Activity = () => {
	
	const myTransactions = useAppSelector((state: RootState) =>
  [...state.transactions].reverse()
);

  return (
    <ul className={styles.responsive_table}>
      <li className={styles.table_header}>
        <div className={`${styles.col} ${styles.col_1}`}>№</div>
        <div className={`${styles.col} ${styles.col_2}`}>Where</div>
        <div className={`${styles.col} ${styles.col_3}`}>Amount</div>
        <div className={`${styles.col} ${styles.col_4}`}>Date</div>
      </li>
      {myTransactions.map((item, index) => (
        <li
          key={index}
          className={`${styles.table_row} ${styles.appear_animation}`}
        >
          <div className={`${styles.col} ${styles.col_1}`}>{index + 1}</div>
          <div className={`${styles.col} ${styles.col_2}`}>{item.spentWhere.toUpperCase()}</div>
          <div className={`${styles.col} ${styles.col_3}`}>${item.amountSpent}</div>
          <div className={`${styles.col} ${styles.col_4}`}>{item.date}</div>
					<DeleteButton transaction={item}/>
        </li>
      ))}
    </ul>
  );
};
