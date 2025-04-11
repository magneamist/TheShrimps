// "use client";

// import { useState, useEffect } from 'react';
// import { Item, fetchItems } from '../services/api';
// import { mockItems } from '../mocks/mockData';

// // Use mock data if in development without API
// const USE_MOCKS = process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL;

// export function useItems() {
//   const [items, setItems] = useState<Item[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function loadItems() {
//       try {
//         setLoading(true);
        
//         // Use mock data or fetch from API
//         const data = USE_MOCKS 
//           ? mockItems 
//           : await fetchItems();
          
//         setItems(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Error loading items');
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadItems();
//   }, []);

//   return { items, loading, error };
// }

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
        
        if (USE_MOCKS) {
          // Use mock data in development without API
          setItems(mockItems);
        } else {
          try {
            // Try to fetch from API
            const data = await fetchItems();
            setItems(data);
          } catch (fetchErr) {
            console.warn("API fetch failed, falling back to mock data:", fetchErr);
            // Fall back to mock data if the API fetch fails
            setItems(mockItems);
          }
        }
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