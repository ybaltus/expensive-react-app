import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);
    // const [userInput, seUserInput] =  useState({
   //      enteredTitle: '',
   //      enteredAmount: '',
   //      enteredDate: ''
   //  })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // seUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        //
        // });
        // seUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // seUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // seUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // seUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // seUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm(false);
    };

    const visibleForm = (event) => {
        setShowForm(!showForm);
    };

    const cancelForm = (event) => {
        setShowForm(false);
    };

    if(showForm === false) {
        return (
            <button onClick={visibleForm}>Add new expense</button>
        )
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label>Title</label>
                    <input type={'text'} value={enteredTitle}  onChange={titleChangeHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Amount</label>
                    <input type={'number'} value={enteredAmount}  min={0.01} step={0.01} onChange={amountChangeHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Date</label>
                    <input type={'date'} value={enteredDate}  min={'2019-01-01'} max={'2022-12-31'} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button onClick={cancelForm} >Cancel</button>
                <button type={"submit"} >Add new expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;