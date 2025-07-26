// File: src/components/CartItem.jsx
export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow">
      <div className="flex items-center gap-4">
        <img
          src={item.product?.photos?.[0]}
          className="object-contain w-16 h-16"
        />
        <div>
          <h2 className="font-semibold">{item.product?.title}</h2>
          <p>${item.product?.current_price}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item._id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
}
