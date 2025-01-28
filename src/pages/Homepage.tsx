import { AiOutlineSearch } from "react-icons/ai";
import ProductItem from "../components/ProductItem";
import ProductLoadingSkeleton from "../components/ProductLoadingSkeleton";
import axios from "axios";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";

const HomePage = () => {
  const [message] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchParams, setSearchParams] = useSearchParams("");

  const searchQuery = searchParams.get("q");
  const url = searchQuery
    ? `https://dummyjson.com/products/search?q=${searchQuery}`
    : "https://dummyjson.com/products";

  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products", searchQuery],
    queryFn: () => {
      return axios.get(url).then((res) => res.data.products); // Return the products directly
    },
  });

  const handleSearch = () => {
    const inputValue = searchRef.current?.value || "";
    setSearchTerm(inputValue);
    setSearchParams({ q: inputValue });
  };
  // !==
  return (
    <>
      <div className="relative mb-4">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pl-10 rounded  shadow w-full focus:outline-none border border-pink-300 outline-0"
        />
        <span
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={handleSearch}
        >
          <AiOutlineSearch className="w-6 h-6 text-pink-600" />
        </span>
      </div>
      {isLoading && <ProductLoadingSkeleton />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {message && <p className="text-red-500">{message}</p>}
        {data?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
