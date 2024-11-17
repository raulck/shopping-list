import { useState } from "react";
import Item from "./Item";

export default function ShoppingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "bought")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.bought) - Number(b.bought));

  return (
    <div className="list mt-4">
      <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200 py-1">
        <nav className="flex flex-col gap-1 p-1.5">
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </nav>
      </div>
      <div className="mt-4 flex flex-row items-center justify-between">
        <div className="actions">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="focus-visible:outline-none"
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="bought">Sort by bought status</option>
          </select>
        </div>
        <button
          onClick={onClearList}
          className="bg-gray-300 hover:bg-gray-400 text-sm text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <span>Clear list</span>
        </button>
      </div>
    </div>
  );
}
