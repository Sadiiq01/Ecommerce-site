const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-6 mt-16 border-t border-gray-200 ">
      <div className="mx-auto mx-w-4xl text-center">
        <p className="text-gray-600 mb-2 ">
          thank you for visiting this website
        </p>
        <p className="text-gray-800 font-semibold">
          Jajab &copy; {currentYear}
        </p>
      </div>
    </div>
  );
};

export default footer;
