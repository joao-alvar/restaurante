// const storeCartData = (cartItems) => {
//   const cart = cartItems.length > 0 ? cartItems : [];
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// export const sumItems = (cartItems) => {
//   storeCartData(cartItems);
//   return {
//     itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
//     total: cartItems.reduce(
//       (total, prod) => total + prod.price * prod.quantity,
//       0
//     ),
//   };
// };

const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case "REMOVE_MSG":
      return {
        ...state,
        users: state.users.filter((msg) => {
          return msg.id !== action.payload;
        }),
      };
    case "USER_MSG":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case "EDIT_USER":
      const updateUser = action.payload;

      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        ...state,
        users: updateUsers,
      };

    default:
      return state;
  }
};

export default AppReducer;
