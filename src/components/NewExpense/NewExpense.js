import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

import './NewExpense.css';

const NewExpense = ({ addExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };
    addExpense(expenseData);
  };

  const handleClick = () => {
    setShowExpenseForm(!showExpenseForm);
  };

  return (
    <Card className="new-expense">
      {!showExpenseForm ? (
        <button onClick={handleClick}>Add New Expense</button>
      ) : (
        <ExpenseForm saveExpenseData={saveExpenseData} closeForm={handleClick}/>
      )}
    </Card>
  );
};

export default NewExpense;
