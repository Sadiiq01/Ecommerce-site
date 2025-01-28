import axios from "axios";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../types/Product";
import ProductDetailsSkeleton from "./productDetailsSkeleton";
import { ShopContext } from "../shopContext";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { dispatch } = useContext(ShopContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch product data using useQuery
  const { data, isLoading } = useQuery<Product>({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      return res.data; // Return the product data directly
    },
  });

  if (isLoading) return <ProductDetailsSkeleton />;

  if (!data)
    return (
      <div className="p-4 md:p-8">
        <p className="text-red-500">Product not found.</p>
      </div>
    );

  return (
    <div className="p-4 md:p-8">
      <button
        className="bg-pink-600 px-4 mb-4 text-white py-2 rounded-lg shadow cursor-pointer hover:bg-pink-700 transition-all duration-200"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div className="md:flex">
        <div className="w-1/2 pr-4 mb-6 md:mb-0">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md"
            src={data.thumbnail}
            alt={data.title}
          />
        </div>

        <div className="md:w-1/2 pl-4 text-gray-600 mb-4">
          <p>{data.description}</p>
          <div className="flex justify-between my-4">
            <p className="text-pink-600 font-bold ">${data.price}</p>
            <p className="text-gray-500">
              {data.stock > 0 ? `${data.stock} in stock` : "Out of stock"}
            </p>
          </div>

          <div>
            <p>
              <span className="text-yellow-400">
                {"★".repeat(Math.round(data.rating))}
              </span>
              <span className="text-gray-500">
                {"★".repeat(5 - Math.round(data.rating))}
              </span>
            </p>
          </div>

          <div className="my-4">
            <button
              className="bg-pink-600 px-4 mb-4 text-white py-2 rounded-lg shadow cursor-pointer hover:bg-pink-700 transition-all duration-200"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", product: data });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
