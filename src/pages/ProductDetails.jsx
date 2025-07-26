// File: src/pages/ProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct, addToCart } from "../api/api";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(id)
      .then((res) => setProduct(res.data?.data))
      .catch((err) => console.error("Failed to load product:", err));
  }, [id]);

  const handleAdd = () => {
    addToCart(product._id).then(() => alert("Added to cart!"));
  };

  if (!product) return <p className="p-8">Loading...</p>;

  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col gap-8 md:flex-row">
        <img
          src={product.photos?.[0]}
          alt={product.title}
          className="object-contain w-full h-auto md:w-1/3"
        />
        <div className="flex-1">
          <h1 className="mb-2 text-3xl font-bold">{product.title}</h1>
          <p className="mb-2 text-xl font-semibold">${product.current_price}</p>
          <button
            onClick={handleAdd}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
