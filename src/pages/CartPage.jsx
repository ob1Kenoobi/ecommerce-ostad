// File: src/pages/CartPage.jsx
import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../api/api";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    getCart()
      .then((res) => {
        console.log("🧪 Cart response:", res.data);
        const items = Array.isArray(res.data?.data)
          ? res.data.data
          : Object.values(res.data?.data || {}).find((v) => Array.isArray(v)) ||
            [];
        setCart(items);
      })
      .catch((err) => console.error("Cart load error:", err));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id).then(() => loadCart());
  };

  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.product?.current_price || 0), 0)
    : 0;

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
      <div className="space-y-4">
        {Array.isArray(cart) &&
          cart.map((item) => (
            <CartItem key={item._id} item={item} onRemove={handleRemove} />
          ))}
      </div>
      <div className="mt-4 text-xl font-semibold text-right">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}
