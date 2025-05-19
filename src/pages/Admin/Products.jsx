import React, { useState } from "react";
import { useApiCall } from "../../hooks/useApiCall";
import { fetchProductAxios } from "../../services/productService";
import { NavLink } from "react-router";
import Card from "../../components/UI/Card";
import Loader from "../../components/common/Loader";
import Cards from "../../components/UI/Cards";
const ITEMS_PER_PAGE = 8;
function Products() {
  const { data, error, loading } = useApiCall(fetchProductAxios);
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) {
    return <div><Loader/></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !Array.isArray(data.products)) {
    return <div>No data available</div>;
  }
  const totalItems = data.products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = data.products.slice(startIndex, endIndex);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageClick = (page) => setCurrentPage(page);

  return (
    <section className="max-w-[1250px] mx-auto px-4 py-10 items-stretch">
      <h1 className="text-center text-gray-600 pb-20 font-bold text-4xl">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {currentProducts.map((product) => (
          <Cards product={product}/>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Products;
