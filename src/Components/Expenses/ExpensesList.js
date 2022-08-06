import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    const filteredExpenses = props.items;

    if (filteredExpenses.length === 0)
        return <h2 className={"expenses-list__fallback"}>No expense found</h2>;

    return (
        <ul className={"expenses-list"}>
            {filteredExpenses.map((expense) => (
                <ExpenseItem key = {expense.id} expense = {expense} />)
            )}
        </ul>
    );
}

export default ExpensesList;
