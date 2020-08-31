import React, { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({reducer, initialState, children})=> (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
        {/* Children is refering to the <App /> */}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

