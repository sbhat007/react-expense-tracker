import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem (props) {
    /*let propTitle = props.title*/
    const [title, setTitle] = useState(props.expense.title);

    /*const clickHandler = () => {
        //console.log("clicked !!!");
        setTitle("Updated !");
    }*/

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.expense.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.expense.amount}</div>
            </div>
            {/*<button onClick={clickHandler}>Click me</button>*/}
        </Card>
    )
}
export default ExpenseItem;
