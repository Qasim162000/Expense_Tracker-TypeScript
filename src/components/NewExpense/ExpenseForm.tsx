import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

type ExpenseData = {
  title: string;
  amount: string;
  date: Date;
};

type ExpenseFormProps = {
  onSaveExpenseData: (enteredExpenseData: ExpenseData) => void;
};

const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="01-01-2022"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
