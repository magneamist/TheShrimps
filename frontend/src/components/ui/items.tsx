"use client";

import React, { useEffect, useState } from 'react';

type Item = {
  id: number;
  imageName: string;
  name: string;
  description: string;
  size: string;
  price: string;
};

const GetItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/item")
      .then((res) => {
        if (!res.ok) throw new Error("Error.");
        return res.json();
      })
      .then((data: Item[]) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Fetching Articles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <img src={`http://localhost:4000/images/${item.imageName}`} style={{ width: '200px', height: '100px' }}></img>
          {item.name}
          {item.description}
          {item.size}
          {item.price}
        </li>
      ))}
    </ul>
  );
};

export default GetItems;
