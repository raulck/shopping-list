export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="mt-4">
        <em>Start adding some items to your shopping list</em>
      </p>
    );

  const numItems = items.length;
  const numBought = items.filter((item) => item.bought).length;
  const percentage = Math.round((numBought / numItems) * 100);

  return (
    <footer className="stats mt-8">
      <em>
        {percentage === 100
          ? "You bought all items from your shopping list!"
          : `You have ${numItems} items on your list, and you already bought ${numBought} (${percentage}%)`}
      </em>
    </footer>
  );
}
