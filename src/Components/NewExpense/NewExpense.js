import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const [flag, setFlag] = useState(false);

    const changeFlagToTrue = () => {
        setFlag(true);
    }
    const changeFlagToFalse = () => {
        setFlag(false);
    }

    return (
      <div className={"new-expense"}>
          {!flag && <button onClick={changeFlagToTrue}>Add Expense</button>}
          {flag && <ExpenseForm onSaveExpense = {props.onSaveExpense} changeFlagToFalse = {changeFlagToFalse}/>}
      </div>
    );
}

export default NewExpense;
