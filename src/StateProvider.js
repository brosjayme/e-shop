import React, { createContext, useContext, useReducer } from "react";

// preparing data layers
export const StateContext = createContext();

// wrap the app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

// this is used to pull info from the data layers
export const useStateValue = () => useContext(StateContext);
