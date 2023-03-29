import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState('all');

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
    expenseData.filter((expense) => expense.date === filteredYear);
  };

  const filteredExpenses = expenseData.filter((expense) => {
    if (filteredYear === 'all') return expense;

    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          filterByYear={handleFilterChange}
        />
        {filteredExpenses?.map((expense) => {
          const { id } = expense;
          return <ExpenseItem key={id} {...expense} />;
        })}
        {expenseData.length < 1 && (
          <p className="no-expenses">
            No expenses: enter your first expense above!
          </p>
        )}
      </Card>
    </>
  );
};

export default Expenses;
