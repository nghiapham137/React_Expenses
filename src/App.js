// import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expenses/Expense";

function App() {
  const expenses = [
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

  document.getElementById("root");
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
