import { AddCart } from "./types/AddCart";
import { EmptyCart } from "./types/EmptyCart";
import { Product } from "./types/Product";
import { RemoveFromCart } from "./types/RemoveFrmoCart";

export type Action = AddCart | RemoveFromCart | EmptyCart;

const shopReducer = (state: Product[], action: Action): Product[] => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.product];
  } else if (action.type === "REMOVE_FROM_CART") {
    return state.filter((product) => product.id !== action.id);
  } else if (action.type === "EMPTY_CART" && action.length > 0) return [];
  return state;
};

export default shopReducer;
