import { GoTrash } from "react-icons/go";
import Payments from "./payments";
import { useContext } from "react";
import { ShopContext } from "../shopContext";

const CartItem = () => {
  const { products, dispatch } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">
          {products.length > 0
            ? "Your Cart Items"
            : "Your Cart Is Empty. Go Ahead and Add Items!"}
        </h2>
        {products.map((product, index) => (
          <div key={index} className="flex items-start space-x-4 mb-10">
            <img
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
              src={product.thumbnail}
              alt={product.title}
            />
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">
                {product.description.slice(0, 35) + "..."}
              </p>
              <div className="flex justify-between items-center my-3">
                <div className="flex space-x-2 items-center">
                  <span className="text-lg font-bold text-pink-500">
                    ${product.price.toFixed()}
                  </span>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 transition-all duration-200 cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", id: product.id })
                  }
                >
                  <GoTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Payments />
    </div>
  );
};

export default CartItem;
