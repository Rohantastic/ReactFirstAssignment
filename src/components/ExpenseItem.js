import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2023, 8, 28);
    const expenseTitle = "car Insurance";
    const expenseAmount = 294.67;
    const LocationOfExpenditure = "location";
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <h3>{LocationOfExpenditure}</h3>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem; 