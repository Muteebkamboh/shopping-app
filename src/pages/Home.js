import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsLoading,
  selectProductsError,
} from "../features/product/productSlice";
import { addToCart } from "../features/cart/CartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold text-red-600">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />

            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {product.title}
            </h3>

            <p className="text-xl font-bold text-green-600 mb-2">
              ${product.price}
            </p>

            <div className="flex items-center mb-4">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1 text-sm text-gray-600">
                {product.rating?.rate} ({product.rating?.count} reviews)
              </span>
            </div>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Home;
