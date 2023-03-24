import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function Expenses({ expenseData }) {
  return (
    <>
      <div className="expenses">
        {expenseData.map((expense) => {
          const { id, title, amount, date } = expense;
          return (
            <ExpenseItem
              key={id}
              title={title}
              amount={amount}
              date={date}
            />
          );
        })}
      </div>
    </>
  );
}

export default Expenses;
