import { Link } from "react-router-dom";

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.photos?.[0]}
          alt={product.title}
          className="object-contain h-48 mb-4"
        />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p>${product.current_price}</p>
      </Link>
      {onDelete && (
        <button
          onClick={() => onDelete(product._id)}
          className="px-3 py-1 mt-2 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Delete
        </button>
      )}
    </div>
  );
}
