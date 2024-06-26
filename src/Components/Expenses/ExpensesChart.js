import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

    let expensesChart = [{'label':'Jan', 'value':0},
        {'label':'Feb', 'value':0},
        {'label':'Mar', 'value':0},
        {'label':'Apr', 'value':0},
        {'label':'May', 'value':0},
        {'label':'Jun', 'value':0},
        {'label':'Jul', 'value':0},
        {'label':'Aug', 'value':0},
        {'label':'Sep', 'value':0},
        {'label':'Oct', 'value':0},
        {'label':'Nov', 'value':0},
        {'label':'Dec', 'value':0},];

    for (const expense of props.expenses) {
        const month = expense.date.getMonth(); //Starting from Jan. Jan will retrieve value of 0 - zero
        expensesChart[month].value += expense.amount;
    }

    return (
        <Chart dataPoints = {expensesChart}/>
    )
}

export default ExpensesChart;
