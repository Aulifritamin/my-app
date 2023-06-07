import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BudgetData } from "../../types/budgetFormTypes";

interface BudgetFormState {
  transactions: BudgetData[];
}

const initialState: BudgetFormState = {
  transactions: [],
};

const budgetFormSlice = createSlice({
  name: "budgetForm",
  initialState,
  reducers: {
    addNewTransaction: (state, action: PayloadAction<BudgetData>) => {
      state.transactions.push(action.payload);
    },
    addTransactionsFromDb: (state, action: PayloadAction<BudgetData[]>) => {
      state.transactions.push(...action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const rootReducer = budgetFormSlice.reducer;
export const {
  addNewTransaction,
  addTransactionsFromDb,
  deleteTransaction,
} = budgetFormSlice.actions;
