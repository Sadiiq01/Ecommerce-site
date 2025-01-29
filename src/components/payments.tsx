import { useContext, useState } from "react";
import { ShopContext } from "../shopContext"; // Adjust path accordingly

const Payments = () => {
  const { products, dispatch } = useContext(ShopContext);
  const [orderCompleted, setOrderCompleted] = useState(false); // Track order completion status

  const total = products.reduce((a, p) => a + p.price, 0).toFixed();

  const handleCheckout = () => {
    // Dispatch action to empty the cart
    dispatch({ type: "EMPTY_CART", length: products.length });
    // Set order completion message
    if (products.length > 0) setOrderCompleted(true);
  };

  if (orderCompleted) {
    return (
      <div className="lg:w-1/3 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Order Is Completed</h2>
        <p className="text-lg text-green-500">Thank you for your purchase!</p>
      </div>
    );
  }
  return (
    <div className="lg:w-1/3">
      <div className="p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Choose Payment Method</h2>
        <div className="space-y-4">
          <label htmlFor="Card Payment" className="flex space-x-2 items-center">
            <input name="payment" type="radio" id="Card Payment" />
            <span>Card Payment</span>
          </label>
          <label
            htmlFor="Cash On Delivery"
            className="flex space-x-2 items-center"
          >
            <input name="payment" type="radio" id="Cash On Delivery" />
            <span>Cash On Delivery</span>
          </label>
        </div>
        <div className="mt-4 p-4">
          <div className="flex justify-between items-center">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-pink-500 font-extrabold">Total:</span>
            <span className="text-pink-500 font-extrabold">${total}</span>
          </div>
        </div>
        <button
          className="w-full px-5 py-2 bg-pink-500 text-white rounded-lg cursor-pointer"
          onClick={handleCheckout} // Handle checkout click
        >
          Proceed Checkout
        </button>
      </div>
    </div>
  );
};

export default Payments;
