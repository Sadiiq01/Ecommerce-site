import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../shopContext";

const header = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60  backdrop-blur-lg z-10 shadow-md  ">
      <div className="">
        <nav className="max-w-4xl mx-auto md:flex md:justify-between items-center p-4 ">
          <Link to="/" className="font-semibold text-gray-700 text-xl">
            Jajab
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-pink-600">
              Home
            </Link>
            <Link to="/products" className="hover:text-pink-600">
              Products
            </Link>
            <Link to="/about" className="hover:text-pink-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-pink-600">
              Contact
            </Link>
            <Link to="/cart" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-pink-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {products.length}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default header;
