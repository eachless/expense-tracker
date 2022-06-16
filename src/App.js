import React ,{useState} from 'react'
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpensesFilter from "./components/Expense/ExpenseFilter"

const Dummy_expense = [
  {
    id: 'e1',
    title: 'food',
    amount: 94,
    date: new Date(2022, 5, 14)
  },
  {
    id: 'e2',
    title: 'dash',
    amount: 94,
    date: new Date(2021, 5, 24),
  },
  {
    id: 'e3',
    title: 'daizi',
    amount: 94,
    date: new Date(2022, 4, 24),
  },
  {
    id: 'e4',
    title: 'naozi',
    amount: 94,
    date: new Date(2022, 5, 24),
  }
]

const App=() => {

  const [expense, setExpense] = useState(Dummy_expense);



  const addDataFromForm=(data)=>{
        setExpense((prevExpense) =>{
          return [data, ...prevExpense];
        });
      }
      
  

  return (
    <div>
      <NewExpense saveDataOnForm = {addDataFromForm}/>
      <Expense items = {expense} />
     </div> 
  );
}

export default App;
