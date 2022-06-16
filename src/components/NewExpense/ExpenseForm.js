
import React, {useState} from 'react';

import './ExpenseForm.css'
const ExpenseForm =(props) =>{
    
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    
    // const[userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    //     //set atri
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: enteredTitle.target.value,
    //     // })

    //     //using arrow function

    //     setUserInput((prevState) =>{
    //         return{...prevState, enteredTitle: enteredTitle.target.value};
    //     })
    }

    const amountChangeHandler = (event) =>{
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler =(event) =>{
        setEnteredDate(event.target.value);
    }


    const SubmitHandler = (event) =>{
        event.preventDefault();
        
        const  expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData)
        
        setEnteredTitle("");
        setEnteredDate('');
        setEnteredAmount('');
    }
    return(
        <form onSubmit = {SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type = 'text' 
                    value = {enteredTitle} 
                    onChange = {titleChangeHandler}/>
                </div>

                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type = 'number'
                     min="0.01" 
                     step = "0.01"
                     value = {enteredAmount} 
                     onChange = {amountChangeHandler} />
                </div>
                
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type = 'date'
                     min="1991-01-01" 
                     max = "2022-12-31" 
                     value = {enteredDate} 
                     onChange = {dateChangeHandler} /> 
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = "submit">Add Expense</button>
                <button type = "button" onClick = {props.panduan} >Cancel</button>
            </div>
        </form>
    )
};

export default ExpenseForm