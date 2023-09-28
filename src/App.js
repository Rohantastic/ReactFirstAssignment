import logo from './logo.svg';
import './App.css';
import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';

function App() {

  const expense = [{
    title: "Car insurance",
    amount: "124.34",
    date: new Date(2021, 8, 28)
  }, {
    title: "Home insurance",
    amount: "954.65",
    date: new Date(2021, 3, 24)
  },
  {
    title: "Health insurance",
    amount: "924.23",
    date: new Date(2021, 1, 23)
  },
  {
    title: "Life insurance",
    amount: "2942.89",
    date: new Date(2021, 7, 12)
  }];

  const array = [];

  for (let i = 0; i < expense.length; i++) {
    const expenses = expense[i];
    array.push(
      <Card className='expenses'>
        <ExpenseItem
        key={i} 
        title={expenses.title} 
        amount={expenses.amount}
        date={expenses.date}
      />
      </Card>
    );
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      {array}
    </>
  );
}

export default App;
