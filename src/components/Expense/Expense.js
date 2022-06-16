import React, {useState} from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';
import  './Expense.css'
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';
const Expense=(props)=>{
  
  const [filteredYear, setFilterYear] = useState('2022')

  const fileterChangeHandler = (selectedYear)=>{
    setFilterYear(selectedYear)

  }

  const filterExpense = props.items.filter(expense =>{
    
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return(

    <Card className ="expense">

      <ExpensesFilter  onChangeFilter={fileterChangeHandler}  />
      {/* {filterExpense.length === 0 ? <p>Nothing here</p> 
      : filterExpense.map((expense) =>( 
                <ExpenseItem
                key = {expense.id}
                title = {expense.title} 
                amount = {expense.amount} 
                date = {expense.date}/>
              ))
      } */}

{/*   2sec way    
      {filterExpense.length === 0 && <p2>No Expense</p2>}
      {filterExpense.length > 0 && filterExpense.map((expense) =>(
           <ExpenseItem
           key = {expense.id}
           title = {expense.title} 
           amount = {expense.amount} 
           date = {expense.date}/>
      ))} */}
      <ExpenseChart expenses = {filterExpense}/>
      <ExpenseList items = {filterExpense}/>
      

    </Card>
    )
}

export default Expense;