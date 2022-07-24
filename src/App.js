import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/budget';
import Remaining from './components/remain';
import Expense from './components/expensetotal';
import List from './components/Expenselist';
import AddExpenseList from './components/AddExpense';
  
const App = () =>{

  return (
    <appProvider>
      <div className='container'>
      <h1 className='mt-3'>Budget Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>

        <div className='col-sm'>
          <Remaining />
        </div>

        <div className='col-sm'>
          <Expense />
        </div>
        
        <h3>Expense List</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <List /> 
          </div>
        </div>        
      </div>
      <h3 className='row mt-3'>Add Expense</h3>
        <div className='row mt-3'>
            <div className='col-sm'>
              <AddExpenseList/>
            </div>
        </div>
    </div>
    </appProvider>
    
  );
};

export default App;
