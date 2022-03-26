import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.22,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "new Tv",
    amount: 797.4,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "car Insurance",
    amount: 294.2,
    date: new Date(2019, 3, 16),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450.1,
    date: new Date(2020, 5, 24),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
      setExpenses((prevExpenses) => {
        console.log(expenses);
        return [expense,...prevExpenses];
      });
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
