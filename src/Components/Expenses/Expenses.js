import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses (props) {

    const [filter, setFilter] = useState('');
    const someVariable = <h1>Hello {filter}</h1>

    const saveFilterHandler = (filterValue) => {
        setFilter(filterValue);
        console.log(filter);
    }

    let filteredExpenses;
    if (filter === "")
        filteredExpenses = props.expense;
    else {
        filteredExpenses = props.expense.filter((expense) => {
            return expense.date.getFullYear().toString() === filter;
        })
    }

    return (

            <Card className="expenses">
            <div>
                <ExpenseFilter onSaveFilter = {saveFilterHandler} filter = {filter}/>
            </div>
            {/*{filteredExpenses.length === 0 && <p>No expense found</p>}*/}
            {/*{filteredExpenses.length > 0 && filteredExpenses.map((expense) => (*/}
            {/*     <ExpenseItem key = {expense.id} expense = {expense} />)*/}
            {/*)}*/}
                <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items = {filteredExpenses}/>

            {/*<ExpenseItem expense = {props.expense[0]}></ExpenseItem>
            <ExpenseItem expense = {props.expense[1]}></ExpenseItem>
            <ExpenseItem expense = {props.expense[2]}></ExpenseItem>
            <ExpenseItem expense = {props.expense[3]}></ExpenseItem>*/}
        </Card>

    );
}

export default Expenses;
