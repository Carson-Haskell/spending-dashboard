import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState('');

  return (
    <>
      <Card>
        <ExpenseFilter handleYearFilter={setFilteredYear} />
      </Card>
      <Card className="expenses">
        {expenseData.map((expense) => {
          const { id } = expense;
          return <ExpenseItem key={id} {...expense} />;
        })}
      </Card>
    </>
  );
};

export default Expenses;
