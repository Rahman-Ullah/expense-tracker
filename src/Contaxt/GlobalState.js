import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//Initial State
const initialState={
    transactions:[]
}
//Creact Context
export const GlobalContext=createContext(initialState);
//Proveder Component
export const GlobalProvider = ({children})=>{
       const [state, dispatch]=useReducer(AppReducer,initialState);
// Actons
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload: id
    });
}
function addTransaction(transcations){
    dispatch({
        type:'ADD_TRANSACTION',
        payload: transcations
    });
}

return(
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
);
}