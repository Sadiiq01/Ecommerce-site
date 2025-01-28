import { useState } from "react";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Link
      to={`/product-details/${product.id}`}
      className=" p-4 rounded-lg shadow-lg"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-32 object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="my-6">
        <span>
          {isExpanded
            ? product.description
            : product.description.substring(0, 30) + "..."}
        </span>
        <button
          className="text-blue-500 ml-2 underline cursor-pointer block"
          onClick={() => {
            toggleDescription();
          }}
        >
          {isExpanded ? "show less" : "show more "}
        </button>
      </p>
      <p className="font-bold">Price: ${product.price}</p>
      <div className="mt-4">
        <span className="font-extrabold underline">Stock : </span>
        <span
          className={`${
            product.stock <= 0 ? "text-red-500" : "text-green-500"
          } font-extrabold`}
        >
          {product.stock > 0 ? product.stock : "Out Of Stock"}
        </span>
      </div>
      <p>
        <span className="text-yellow-500">
          {" "}
          {"★".repeat(Math.round(product.rating))}
        </span>
        <span className="text-gray-500">
          {"★".repeat(5 - Math.round(product.rating))}
        </span>
      </p>
    </Link>
  );
};

export default ProductItem;
