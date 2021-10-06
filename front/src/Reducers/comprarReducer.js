import axios from "axios";
import { TYPES } from "../Actions/comprarAction";

export const shoppingInitialState = {
  productos: [],
  carrito: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD: {
      shoppingInitialState.productos = state;
    }
    case TYPES.ADD_TO_CART: {
    }
    default:
      return state;
  }
}
