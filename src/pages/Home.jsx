// File: src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchProducts, addToCart } from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        console.log("🧪 Full API response:", res.data);
        const possibleArrays = Object.values(res.data?.data || {}).find((v) =>
          Array.isArray(v)
        );
        if (Array.isArray(possibleArrays)) {
          setProducts(possibleArrays);
        } else {
          console.error("❌ Still invalid format", res.data);
        }
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleAddToCart = (id) => {
    addToCart(id)
      .then(() => alert("Added to cart!"))
      .catch((err) => console.error("Add to cart failed:", err));
  };

  return (
    <div className="container px-4 py-10 mx-auto md:px-8">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
        All Products
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={() => handleAddToCart(product._id)}
          />
        ))}
        {products.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}
