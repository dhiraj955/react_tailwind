import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) return <Navigate to="/signin" />;
  if (cartData.length === 0) return <Navigate to="/cart" />;

  const total = cartData.reduce((acc, item) => acc + item.price, 0);

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });

    // Clear the cart
    setCartData([]);
  };

  return (
    <div className="w-[95%] lg:w-[75%] mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>

      <div className="bg-white shadow-md p-6 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        <ul className="space-y-3">
          {cartData.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-gray-700">{item.title}</span>
              <span className="font-medium">${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center mt-6">
          <p className="text-lg font-semibold">Total:</p>
          <p className="text-xl font-bold text-green-600">${total.toFixed(2)}</p>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
