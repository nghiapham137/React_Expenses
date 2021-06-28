// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 123.34,
    date: new Date(2020, 2, 11),
  },
  {
    id: 2,
    title: "Pens",
    amount: 35.56,
    date: new Date(2020, 7, 13),
  },
  {
    id: 3,
    title: "Cups",
    amount: 76.12,
    date: new Date(2021, 1, 11),
  },
  {
    id: 4,
    title: "Phone",
    amount: 125.56,
    date: new Date(2021, 4, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
