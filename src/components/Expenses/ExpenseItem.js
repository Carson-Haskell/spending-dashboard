import React, { useState } from 'react';

import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const handleClick = () => {
    setExpenseTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
