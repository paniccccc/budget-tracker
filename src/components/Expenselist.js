import React, {useContext} from "react";
import ExpenseItem from "./Expenseitem";
import { appContext } from '../context/appContext';

const List = () => {
    const { expenses } = useContext(appContext);

    return(
        <ul className="list-group">{expenses.map(((expense)=>(
            <ExpenseItem 
            id={expense.id} 
            name={expense.name} 
            cost={expense.cost}
            />
        )))}
        </ul>
    );
};

export default List;