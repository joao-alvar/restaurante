const MsgReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MSG":
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };

    default:
      return state;
  }
};

export default MsgReducer;
