import React from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };
    onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </Card>
  );
};

export default NewExpense;
