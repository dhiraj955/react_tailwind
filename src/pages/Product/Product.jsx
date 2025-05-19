import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { useApiCall } from "../../hooks/useApiCall";
import { fetchProductAxios } from "../../services/productService";
import Card from "../../components/UI/Card";
import Pagination from "../../components/UI/Pagination";
import { CartContext } from "../../context/CartContext";
import Loader from "../../components/common/Loader";


const ITEMS_PER_PAGE = 8;

function Product({searchQuery}) {
  const { data, error, loading } = useApiCall(fetchProductAxios);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { cartData } = useContext(CartContext);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !Array.isArray(data.products)) {
    return <div>No data available</div>;
  }

  // const filteredProducts = data.products.filter((product)=>
  //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
  // )

  
  const totalItems = data.products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = data.products.slice(startIndex, endIndex);

  return (
    <>
 
    <section className="max-w-[1250px] mx-auto px-4 py-10">
      <h1 className="text-center text-gray-600 pb-20 font-bold text-4xl">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {currentProducts.map((product) => {
          const cartFilters = cartData.filter(
            (cartItem) => product.id === cartItem.id
          );
          const isInCart = cartFilters.length > 0;
          return <Card product={product} isInCart={isInCart} />;
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </section>
    </>
  );
}

export default Product;
