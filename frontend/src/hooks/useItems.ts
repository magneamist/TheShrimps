"use client";

import { useState, useEffect } from 'react';
import { Item, fetchItems } from '../services/api';
import { mockItems } from '../mocks/mockData';

// Use mock data if in development without API
const USE_MOCKS = process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL;

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadItems() {
      try {
        setLoading(true);
        
        // Use mock data or fetch from API
        const data = 
        // USE_MOCKS 
        //   ? mockItems 
        //   : 
          await fetchItems();
          
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading items');
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);

  return { items, loading, error };
}