import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [inputtedTitle, setInputtedTitle] = useState('');
  const [inputtedAmount, setInputtedAmount] = useState('');
  const [inputtedDate, setInputtedDate] = useState('');

  const handleTitleChange = (event) => {
    setInputtedTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setInputtedAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setInputtedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: inputtedTitle,
      amount: inputtedAmount,
      date: new Date(inputtedDate),
    };

    onSaveExpenseData(expenseDate);

    setInputtedTitle('');
    setInputtedAmount('');
    setInputtedDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required={true}
            placeholder="Groceries"
            type="text"
            value={inputtedTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required={true}
            placeholder="0.00"
            value={inputtedAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required={true}
            value={inputtedDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
