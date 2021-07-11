import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const startShowingFormHandler = () => {
        setShowForm(true);
    };

    const stopShowingFormHandler = () => {
        setShowForm(false);
    };

    return (
        <div className={'new-expense'}>
            { !showForm && <button onClick={startShowingFormHandler}>Add new expense</button>}
            { showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopShowingFormHandler}/>}
        </div>
    )
}

export default NewExpense;