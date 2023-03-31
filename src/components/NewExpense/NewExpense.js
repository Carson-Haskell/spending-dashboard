import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

import './NewExpense.css';

const NewExpense = ({ addExpense }) => {
  const [isEditingForm, setIsEditingForm] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };
    addExpense(expenseData);
  };

  const handleFormEditing = () => {
    setIsEditingForm(!isEditingForm);
  };

  return (
    <Card className="new-expense">
      {!isEditingForm ? (
        <button onClick={handleFormEditing}>Add New Expense</button>
      ) : (
        <ExpenseForm
          saveExpenseData={saveExpenseData}
          handleFormEditing={handleFormEditing}
        />
      )}
    </Card>
  );
};

export default NewExpense;
