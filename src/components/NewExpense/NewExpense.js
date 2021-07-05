import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };

    const onClickHandler = () => {
      setShowForm(true)
      setShowButton(false)}
    
      return (
        <div className='new-expense'>
          {showButton ? <button onClick= {onClickHandler}>Add Expense</button> : null } 
          {showForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> : null}
          
        </div>
      );
}

export default NewExpense;