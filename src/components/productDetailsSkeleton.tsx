const ProductDetailsSkeleton = () => {
  return (
    <>
      <div className="p-4 md:p-8 ">
        <p className="bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse w-1/6 h-[20px] mt-5 "></p>
      </div>
      <div className="p-4 md:p-8 flex justify-between gap-9">
        <div className="w-1/2 h-96 pr-4 mb-6 md:mb-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
        <div className="w-1/2 h-96">
          <p className="bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse w-full h-[100px]"></p>
          <p className="bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse w-full h-[20px] mt-5"></p>
          <p className="bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse w-full h-[20px] mt-5"></p>
          <p className="bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse w-1/2 h-[20px] mt-5"></p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSkeleton;
