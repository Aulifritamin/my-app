import styles from "./Content.module.scss";
import { AddNewTransactionModal } from "../AddNewTransaction/addNewTransaction";
import Dashboard from "components/Dashboard/Dashboard";
import { firebaseAuth, firestore } from "../../firebase/firebase";
import { RootState} from "app/store";
import { useSelector } from "react-redux";
import { addTransactionsFromDb } from "components/AddNewTransaction/budgetSlice";
import {
  query,
  getDocs,
  collection,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { Activity } from "./activity/activity";
import { BudgetData } from "types/budgetFormTypes";
import Spinner from "components/utils/spinner/spinner";

export const Content = () => {
  const user = firebaseAuth.currentUser?.uid;
  const email = firebaseAuth.currentUser?.email;
  const dispatch = useAppDispatch();

  const collectionRef = collection(firestore, user || "");
  const doc1Ref = doc(collectionRef, email || "");
  const collectionRef1 = collection(doc1Ref, "MyTransactions");
  const userName = firebaseAuth.currentUser;
  const MyTransactions = useSelector((state: RootState) => state.transactions);

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });


    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userLoggedIn) {
          setLoading(true);

          const q = query(collectionRef1);
          const querySnapshot = await getDocs(q);
          const transactions: BudgetData[] = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data() as BudgetData;
            transactions.push(data);
          });

          dispatch(addTransactionsFromDb(transactions));

          setLoading(false); 
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userLoggedIn, dispatch]);

  return (
    <div className={styles.content}>
      {loading ? (
        <div style={{ width: "100%", height: "100%" }}>
          <Spinner />
        </div>
      ) : (
        <>
          <div>Hello, {userName?.displayName}</div>
          <div className={styles.add_new_buttons}>
            <AddNewTransactionModal />
          </div>
          <div className={styles.analitics_wrapper}>
            <Dashboard />
          </div>
          {/* <div className={styles.card_detail}></div> */}
          <div className={styles.activity}>
            <Activity />
          </div>
        </>
      )}
    </div>
  );
};
