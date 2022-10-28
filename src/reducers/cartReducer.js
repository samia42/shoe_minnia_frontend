import { ADD_TO_CART, REMOVE_ITEM_FROM_CART } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("state cart");

      const item = action.payload;
      const isItemExit = state.cartItems.find(
        (i) => i.product === item.product
      );
      if (isItemExit) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExit.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    default:
      return state;
  }
};
