// File: src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { createProduct, deleteProduct, fetchProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

export default function Admin() {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    fetchProducts()
      .then((res) => {
        console.log("🛠 Admin API response:", res.data);
        const productsArray = Array.isArray(res.data?.data)
          ? res.data.data
          : Object.values(res.data?.data || {}).find((v) => Array.isArray(v)) ||
            [];
        setProducts(productsArray);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = (data) => {
    createProduct(data)
      .then(() => {
        alert("Product created!");
        loadProducts();
      })
      .catch((err) => console.error("Create error:", err));
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id).then(() => loadProducts());
    }
  };

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Admin Panel</h1>
      <div className="mb-8">
        <h2 className="mb-2 text-lg font-semibold">Create Product</h2>
        <ProductForm onSubmit={handleCreate} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
