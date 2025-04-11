// src/components/ItemList.tsx
"use client";

import React from "react";
import { useItems } from "../hooks/useItems";

const ItemList: React.FC = () => {
  const { items, loading, error } = useItems();

  if (loading) return <p>Fetching items...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="border rounded shadow p-4">
          <img
            src={`http://localhost:8080/images/${item.image}`}
            alt={item.name}
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm">{item.description}</p>
          <div className="mt-2 flex justify-between">
            <span className="font-bold">
              $
              {typeof item.price === "number"
                ? item.price
                : parseFloat(item.price)}
            </span>
            <span>Size: {item.size}</span>
          </div>
          <div className="text-sm mt-1">
            {item.seller_name || `Seller ID: ${item.seller_id}`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
