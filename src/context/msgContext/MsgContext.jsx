import React, { createContext, useReducer } from "react";
import MsgReducer from "./MsgReducer";

// Initial State
const initialState = {
  messages: [],
};

// Create Context
export const MsgContext = createContext(initialState);

// Provider Component
export const MsgProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MsgReducer, initialState);

  // Actions
  const addMsg = (msg) => {
    dispatch({
      type: "ADD_MSG",
      payload: msg,
    });
  };

  return (
    <MsgContext.Provider
      value={{
        messages: state.messages,
        addMsg,
      }}
    >
      {children}
    </MsgContext.Provider>
  );
};
