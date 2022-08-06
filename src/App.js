import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
import React, {useState} from 'react';
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/Expenses/ExpenseFilter";
import AddExpense from "./Components/Expenses/AddExpense";

const DUMMY_EXPENSE = [{'id': 1, 'date' : new Date(2022, 4, 24), 'title':'Bike Insurance', 'amount':435},
    {'id': 2, 'date' : new Date(2021, 1, 24), 'title':'Car Insurance', 'amount':746},
    {'id': 3, 'date' : new Date(2020, 3, 24), 'title':'Property Insurance', 'amount':987},
    {'id':4, 'date' : new Date(2019, 11, 24), 'title':'Life Insurance', 'amount':432}];

function App() {

  /*const expense = [{'id': 1, 'date' : new Date(2022, 4, 24), 'title':'Bike Insurance', 'amount':435},
      {'id': 2, 'date' : new Date(2021, 4, 24), 'title':'Car Insurance', 'amount':746},
      {'id': 3, 'date' : new Date(2020, 4, 24), 'title':'Property Insurance', 'amount':987},
      {'id':4, 'date' : new Date(2019, 4, 24), 'title':'Life Insurance', 'amount':432}]*/

    const [expense, setExpense] = useState(DUMMY_EXPENSE)
    const [egObject, setEgObject] = useState({'name':'shree', 'value':'420'})

    const saveExpenseHandler = (enteredExpense) => {
        const expenseData = {...enteredExpense, id: Math.random().toString()};
        //console.log(expenseData);
        setExpense((prevState) => {
            return [...prevState, expenseData];
        });
        let name2 = 'shree'
        setEgObject(prevState => {
            return {...prevState, name2:name2}
        })
    }

  return (
    <div>
      {/*<h2>Let's get started fella!</h2>*/}
        {/*<AddExpense flag = {flag} changeFlag = {changeFlag}/>*/}
        <NewExpense onSaveExpense = {saveExpenseHandler}/>
      <Expenses expense = {expense}/>
    </div>
  );

  //older way of writing react. react had to be imported in every file where you had to write below kind of code.
    //this is the reason you see import react as well in package.json file along with react-dom. even now when you write jsx
    //it gets converted to below format and then in turn to what you see when you inspect on browser.

/*    return React.createElement('div', {},
        React.createElement('h2', {}, "Lets get started"),
        React.createElement(Expenses, {expense: expense}));*/

}

export default App;
