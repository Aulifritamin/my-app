import styles from "./Card_detail.module.scss";

export const CardDetail = () => {
  return (
    <>
      <div className={styles.card_overview_detail}>Card Info</div>
      <div className={styles.card_overview}>
        <div className={styles.card_informations}>
          <div className={styles.card_informations_wrapper}>
            <div>Card Name</div>
            <p>Main Balance</p>
          </div>
          <div className={styles.card_informations_wrapper}>
            <div>Valid Date</div>
            <p>08/21</p>
          </div>
          <div className={styles.card_informations_wrapper}>
            <div>Card Number</div>
            <p>**** **** **** 1234</p>
          </div>
        </div>
        <div className={styles.card_informations}>
          <div className={styles.card_informations_wrapper}>
            <div>Bank Name</div>
            <p>Chase</p>
          </div>
          <div className={styles.card_informations_wrapper}>
            <div>Card Holder</div>
            <p>Aleksandr</p>
          </div>
          <div className={styles.card_informations_wrapper}>
            <div>Add late</div>
            <p>add late</p>
          </div>
        </div>

        <div>will be added late</div>
      </div>
    </>
  );
};
