import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isShow, setShow] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShow(false);
      };

    const onClickHandler = () => {
      setShow(true);
    };
    const onCancel = () => {
      setShow(false);
    };
    
      return (
        <div className='new-expense'>
          {!isShow && <button onClick= {onClickHandler}>Add Expense</button>} 
          {isShow && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {onCancel} />}
          
        </div>
      );
}

export default NewExpense;