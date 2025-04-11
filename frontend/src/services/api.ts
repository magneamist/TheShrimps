export type Item = {
  id: number;
  seller_id: string | number;
  seller_name?: string;
  image?: string;
  name: string;
  description: string;
  size: string;
  price: string | number;
  tag?: string;
  favorite?: string;
  createdAt?: string;
  updatedAt?: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const res = await fetch(`${API_URL}/api/item`);
    if (!res.ok) throw new Error("Failed to fetch items");
    
    const data = await res.json();
    return data.rows || [];
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};