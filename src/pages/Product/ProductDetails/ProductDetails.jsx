import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

import { FiMinus, FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [getApi, setGetApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const count = parseInt(searchParams.get("count")) || 0;
  const search = searchParams.get("search");
  searchParams.forEach((value, key) => console.log({ [key]: value }));

  const params = useParams();
  const id = params.productID;

  const fetchDummyData = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setGetApi(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDummyData();
  }, []);

  if (loading) return <p>Loading ....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="w-[95%] lg:w-[80%] mx-auto mt-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div>
            <img
              src={getApi.thumbnail}
              alt={getApi.title}
              className="w-[300px] h-[300px] object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              {getApi.title}
            </h1>
            <p className="mb-2 leading-relaxed">
              <span className="font-semibold">Description:</span>{" "}
              {getApi.description}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Brand:</span> {getApi.brand}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Category:</span> {getApi.category}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Price:</span> ${getApi.price}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Discount:</span>{" "}
              {getApi.discountPercentage}%
            </p>
            <p className="mb-2">
              <span className="font-semibold">Rating:</span> {getApi.rating}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Status:</span>{" "}
              {getApi.availabilityStatus}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Stock:</span> {getApi.stock}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Warranty:</span>{" "}
              {getApi.warrantyInformation}
            </p>
            <p className="mb-6">
              <span className="font-semibold">Shipping:</span>{" "}
              {getApi.shippingInformation}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                className="bg-black text-white px-3 py-2 rounded hover:opacity-80"
                onClick={() => {
                  if (count > 0) {
                    setSearchParams({ count: count - 1, search });
                  }
                }}
              >
                <FiMinus />
              </button>
              <p className="bg-gray-300 text-black px-5 py-2 text-sm">
                {count}
              </p>
              <button
                className="bg-black text-white px-3 py-2 rounded hover:opacity-80"
                onClick={() => {
                  setSearchParams({ count: count + 1, search });
                }}
              >
                <FiPlus />
              </button>
              <button
                className="bg-black text-white px-3 py-2 rounded hover:opacity-80"
                onClick={() => {
                  setSearchParams({ count: count + 1, search: getApi.title });
                  toast.success("Added to cart!", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                }}
              >
                Add to Cart
              </button>
              <button
                className="bg-black text-white px-3 py-2 rounded hover:opacity-80"
                onClick={() => {
                  setSearchParams({});
                  toast.success("Reset!", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-10 h-[5px] bg-blue-500 rounded-lg border-none" />

      <div className="w-[95%] lg:w-[80%] mx-auto mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">
          Reviews
        </h1>
        {getApi.reviews?.map((review, index) => (
          <div key={index} className="mb-6">
            <p className="mb-1">
              <span className="font-semibold">Name:</span> {review.reviewerName}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Email:</span>{" "}
              {review.reviewerEmail}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Date:</span> {review.date}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Rating:</span> {review.rating}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Comment:</span> {review.comment}
            </p>
            <hr />
          </div>
        ))}
      </div>
     

    </>
  );
};

export default ProductDetails;
