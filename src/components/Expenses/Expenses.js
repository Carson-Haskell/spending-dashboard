import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState('all');

  const filteredExpenses = expenseData.filter((expense) => {
    if (filteredYear === 'all') return expense;
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          filterByYear={setFilteredYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
