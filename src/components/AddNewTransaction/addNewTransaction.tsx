import { useAppDispatch } from "app/hooks";
import { useState } from "react";
import Modal from "./modal";
import styles from "./addNewTransaction.module.scss";
import {collection, doc, setDoc } from "firebase/firestore";
import { Transaction } from "types/dataFromFirebase";
import { addNewTransaction} from "./budgetSlice";
import { getFormattedDate, getIdDate} from "./date/date";
import { firebaseAuth, firestore } from "../../firebase/firebase";


export const AddNewTransactionModal = () => {
  const [spentWhere, setSpentWhere] = useState<string>(""); 
  const [amountSpent, setAmountSpent] = useState<string>(""); 
  const dispatch = useAppDispatch();

 const user = firebaseAuth.currentUser;
  const idDate = getIdDate()
   const collectionRef = collection(firestore, user?.uid || "") 
   const doc1Ref = doc(collectionRef, user?.email || ""); 
   const collectionRef1 = collection(doc1Ref, `MyTransactions`); 
   const doc2Ref = doc(collectionRef1, idDate);




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const transaction: Transaction = { 
      id: idDate,
      spentWhere,
      amountSpent: parseFloat(amountSpent),
      date: getFormattedDate(),
    };
    await setDoc(doc2Ref, transaction);

    dispatch(addNewTransaction(transaction));

    setSpentWhere("");
    setAmountSpent("");
    setIsModalOpen(false)
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // указываем, что isModalOpen - булевое значение

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.modal_btn} onClick={handleOpenModal}>
        + New Tansaction
      </button>
      <Modal isOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <div className={styles.modal_wrapper}>
          <form onSubmit={handleSubmit}>
          <div>
        <label htmlFor="spentWhere">Где потратили:</label>
        <input
          type="text"
          id="spentWhere"
          value={spentWhere}
          onChange={(e) => setSpentWhere(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amountSpent">Сумма потраченная:</label>
        <input
          type="number"
          id="amountSpent"
          value={amountSpent}
          onChange={(e) => setAmountSpent(e.target.value)}
        />
      </div>
      <div className={styles.modal_wrapper_btn}>
              <button type="submit">add new card</button>
              <button className={styles.modal_wrapper_btn__cancel} onClick={handleCloseModal}>Cancel</button>
          </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

