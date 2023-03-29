import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          filterByYear={setFilteredYear}
        />
        {expenseData?.map((expense) => {
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
