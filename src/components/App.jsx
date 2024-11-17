import { useState } from "react";

import Form from "./Form";
import ShoppingList from "./ShoppingList";
import Stats from "./Stats";

import "../App.css";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4  rounded-lg shadow-lg">
      <Form onAddItems={handleAddItems} />
      {items.length > 0 && (
        <ShoppingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
      )}
      <Stats items={items} />
    </div>
  );
}
