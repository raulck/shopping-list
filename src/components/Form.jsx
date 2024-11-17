import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, bought: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Shopping list</h1>

      <div>
        <div className="relative flex ">
          <input
            type="text"
            id="add-item"
            name="add-item"
            className="w-3/4 ps-24 rounded-s-lg disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600 focus:outline-none focus-visible:outline-none"
            placeholder="Add item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
          />
          <div className="absolute inset-y-0 flex items-center z-20 ps-4">
            <select
              id="select-quantity"
              name="select-quantity"
              className="px-2 rounded-md focus:ring-blue-600 focus:border-blue-600 text-white dark:bg-neutral-700 focus-visible:outline-none"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="w-1/4 py-3 px-4 text-sm font-semibold rounded-e-md border border-transparent bg-red-700 text-white hover:bg-red-800 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
            onClick={handleSubmit}
          >
            Add item
          </button>
        </div>
      </div>
    </>
  );
}
