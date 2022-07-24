import React from "react";
import ExpenseItem from "./Expenseitem";
const List = () =>{
    const expenses = [
        {id: 223, name: "shopping", cost:"20"},
        {id: 223, name: "dinner", cost:"300"},
        {id: 223, name: "travel", cost:"480"},
    ]

    return(
        <ul className="list-group">{expenses.map(((expenses)=>(
            <ExpenseItem 
            id={expenses.id} 
            name={expenses.name} 
            cost={expenses.cost}/>
        )))}</ul>
    );
};

export default List;