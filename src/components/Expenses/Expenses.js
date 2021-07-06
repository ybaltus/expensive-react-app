import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const expenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className={"expenses"}>
                <ExpensesFilter selected={filteredYear} onYearSelected={expenseFilterHandler}/>
                <ExpenseItem
                    title={items[0].title}
                    amount={items[0].amount}
                    date={items[0].date}
                />
                <ExpenseItem
                    title={items[1].title}
                    amount={items[1].amount}
                    date={items[1].date}
                />
                <ExpenseItem
                    title={items[2].title}
                    amount={items[2].amount}
                    date={items[2].date}
                />
                <ExpenseItem
                    title={items[3].title}
                    amount={items[3].amount}
                    date={items[3].date}
                />
            </Card>
        </div>
    )
}

export default Expenses;