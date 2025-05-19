import { NavLink } from "react-router";

function Cards({ product }) {
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
    </div>
  );
}

export default Cards;
