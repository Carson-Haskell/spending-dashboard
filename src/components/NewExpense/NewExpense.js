import React from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

import './NewExpense.css';

const NewExpense = ({ addExpense }) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };
    addExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm saveExpenseData={saveExpenseData} />
    </Card>
  );
};

export default NewExpense;
