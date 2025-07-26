import { useState } from "react";

export default function ProductForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [price, setPrice] = useState(initialData.current_price || "");
  const [photo, setPhoto] = useState(initialData.photos?.[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      current_price: price,
      photos: [photo],
      brand: "6799d84bceaaf5d3413a0989", // Replace with a real brand ID
      categories: ["6799d7b8a164eec94185022f"], // Replace with a real category ID
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-2 border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        className="w-full p-2 border"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
        type="number"
      />
      <input
        className="w-full p-2 border"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        placeholder="Image URL"
        required
      />
      <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
        Submit
      </button>
    </form>
  );
}
