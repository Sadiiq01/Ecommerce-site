import { useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";

const ProductList = () => {
  const [message, setMessage] = useState<string | null>(null);

  // Use react-query's useQuery to fetch data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios
        .get("https://dummyjson.com/products")
        .then((res) => res.data.products); // Return the products directly
    },
    onError: (e: any) => {
      setMessage(e.message);
    },
  });

  if (isError) {
    return <p className="text-red-500">{message || "Something went wrong"}</p>;
  }

  return (
    <>
      {isLoading && <ProductLoadingSkeleton />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
