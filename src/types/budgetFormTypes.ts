export interface BudgetData {
  id?: string;
  spentWhere: string;
  amountSpent: number;
  date: string;
  }
  
  // Тип действия добавления данных бюджета
  export interface AddBudgetDataAction {
    type: 'ADD_BUDGET_DATA';
    payload: BudgetData;
  }
  
  // Общий тип действий формы бюджета
  export type BudgetFormAction = AddBudgetDataAction;