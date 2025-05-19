import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FiMinus, FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";

const Cart = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const isLoggedIn = !!localStorage.getItem("token")
  const navigate = useNavigate();

  if(!isLoggedIn){
    return <Navigate to={"/signin"}/>
  }

  // Initialize quantities for each product
  const [quantities, setQuantities] = useState(
    cartData.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  // Increase quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Decrease quantity (minimum 1)
  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);

    // Remove quantity
    const updatedQty = { ...quantities };
    delete updatedQty[id];
    setQuantities(updatedQty);
    toast.success("Remove from Cart!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  // Calculate total price
  const total = cartData.reduce((acc, item) => {
    const qty = quantities[item.id] || 1;
    return acc + item.price * qty;
  }, 0);

  if (cartData.length === 0) {
    return (
      <div className="text-center text-xl font-semibold py-10">
        Your Cart is empty.
      </div>
    );
  }

  return (
    <div className="w-[95%] lg:w-[75%] mx-auto py-6">
      <h1 className="text-2xl text-center font-bold mb-8">Your Cart Items</h1>

      {cartData.map((item) => (
        <div
          className="flex gap-4 shadow-md rounded-md p-4 mb-6 items-start"
          key={item.id}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-[100px] w-[100px] object-cover rounded"
          />
          <div className="flex flex-col flex-1">
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-gray-600 mt-1">Price: ${item.price}</p>

            <div className="flex items-center gap-4 mt-3">
              <button
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
                onClick={() => increaseQty(item.id)}
              >
                <FiPlus />
              </button>

              <p className="text-sm font-medium">{quantities[item.id]}</p>

              <button
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
                onClick={() => decreaseQty(item.id)}
              >
                <FiMinus />
              </button>

              <button
                className="ml-auto bg-black text-white px-6 py-2 text-sm rounded-full hover:bg-gray-800"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>

            <p className="text-sm text-green-600 mt-2">
              Subtotal: ${(item.price * quantities[item.id]).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      <div className="text-right text-xl font-bold mt-6">
        Total: ${total.toFixed(2)}
      </div>
      <div className="text-right" onClick={()=>navigate("/checkout")}>
      <button className="bg-blue-500 font-medium text-white px-6 py-2 text-sm rounded-[5px] mt-5  ">
        Proceed To ChackOut
      </button>
      </div>
    </div>
  );
};

export default Cart;
