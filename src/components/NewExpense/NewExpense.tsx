import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

type ExpenseData = {
  title: string;
  amount: string;
  date: Date;
};

type NewExpenseProps = {
  onAddExpense: (expense: any) => void;
};

const NewExpense = (props: NewExpenseProps) => {
  const SaveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
