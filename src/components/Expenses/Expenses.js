import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = ({ expenseData }) => {
  return (
    <Card className="expenses">
      {expenseData.map((expense) => {
        const { id } = expense;
        return <ExpenseItem key={id} {...expense} />;
      })}
    </Card>
  );
};

export default Expenses;
