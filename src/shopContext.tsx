import { createContext, ReactNode, useEffect, useReducer } from "react";
import shopReducer, { Action } from "./shopReducer";
import { Product } from "./types/Product";

interface ShowContext {
  products: Product[];
  dispatch: React.Dispatch<Action>;
}

export const ShopContext = createContext<ShowContext>({} as ShowContext);

interface Props {
  children: ReactNode;
}

const ShopContextProvide = ({ children }: Props) => {
  const [products, dispatch] = useReducer(
    shopReducer,
    JSON.parse(localStorage.getItem("cart_item") || "[]") // Default to '[]' if null
    // []
  );
  useEffect(() => {
    localStorage.setItem("cart_item", JSON.stringify(products));
  }, [products]);

  return (
    <ShopContext.Provider value={{ products, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvide;
