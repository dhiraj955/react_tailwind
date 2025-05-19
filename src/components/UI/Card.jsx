import React, { useContext } from "react";
import { NavLink } from "react-router";
import { CartContext } from "../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";

function Card({ product, isInCart }) {
  const { cartData, setCartData } = useContext(CartContext);
  return (
    
    <div
      key={product.id}
      className="border flex flex-col rounded-lg p-4 shadow-sm"
    >
      <NavLink to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded"
        />
      </NavLink>
      <h2 className="text-lg font-semibold mt-3">{product.title}</h2>

      <p className="text-yellow-500 text-sm mt-1">
        {"★".repeat(Math.floor(product.rating))}
        <span className="text-gray-500">({product.rating})</span>
      </p>

      <div className="mt-2 flex items-center gap-4">
        <span className="text-xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span className=" text-sm text-gray-500">
          {product.availabilityStatus}
        </span>
        <span className="text-sm text-green-600 font-semibold ml-auto">
          -{product.discountPercentage}%
        </span>
      </div>

      {isInCart ? (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 mt-auto rounded"
          onClick={() =>
            toast.info("Already in cart!", {
              position: "bottom-right",
              autoClose: 2000,
            })
          }
        >
          Already in Cart
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 mt-auto rounded"
          onClick={() => {
            setCartData([...cartData, product]);
            toast.success("Added to cart!", {
              position: "bottom-right",
              autoClose: 2000,
            });
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
    
    
  );
}

export default Card;
