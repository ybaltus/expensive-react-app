import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Toilet paper', amount:'94.12', date: new Date(2020,11,15)},
    {id: 'e2', title: 'Car insurance', amount:'297.64', date: new Date(2021,2,28)},
    {id: 'e3', title: 'New Samsung TV', amount:'599.99', date: new Date(2019,5,1)},
    {id: 'e4', title: 'New desk', amount:'352.13', date: new Date(2021,6,5)}
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

  return (
      <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses items={expenses}/>
      </div>
  );
}

export default App;
