import './ExpenseItem.css';
import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title,setTitle]= useState(props.title);
    const [amount,setAmount] = useState(props.amount);
   

    const clickHandler = ()=>{
        setTitle("Updated");
    }

    const amountHandler = ()=>{
        setAmount("100");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>

                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change title </button>
            <button onClick={amountHandler}>Change Amount</button>
        </Card>
    );
}

export default ExpenseItem;
