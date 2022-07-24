import React, { createContext, useReducer } from "react";

const AppReducer = (state, action)=>{

    switch(action.type){
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses:[
        {id: 12, name: 'shopping', cost: 20 },
        {id: 13, name: 'dinner', cost: 300},
        {id:14, name:'travel', cost: 480}
    ],
};

export const appContext = createContext();

export const appProvider = (props) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);

        return(<appContext.appProvider value=
            {{ 
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
        
        {props.children}
        </appContext.appProvider>
        );
    };

