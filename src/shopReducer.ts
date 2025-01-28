import { Product } from "./types/Product";

interface AddCart {
  type: "ADD_TO_CART";
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quentity?: number;
  };
}

interface RemoveFromCart {
  type: "REMOVE_FROM_CART";
  id: number;
}

interface EmptyCart {
  type: "EMPTY_CART";
  length: number;
}

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
