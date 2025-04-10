// "use client";
// import { auth } from "@clerk/nextjs/server";
// import React, { useEffect, useState } from 'react';

// // type Item = {
// //   id: number;
// //   seller_id: string;
// //   seller_name: string;
// //   imageName: string;
// //   name: string;
// //   description: string;
// //   size: string;
// //   price: string;
// // };

// // const GetItems: React.FC = () => {
// //   const [items, setItems] = useState<Item[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/api/item")
// //       .then((res) => {
// //         if (!res.ok) throw new Error("Error.");
// //         return res.json();
// //       })
// //       .then((data: Item[]) => {
// //         setItems(data);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         setError(err.message);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) return <p>Fetching Articles...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <ul>
// //       {items.map((item) => (
// //         <li key={item.id}>
// //           <img src={`http://localhost:4000/images/${item.imageName}`} style={{ width: '200px', height: '100px' }}></img>
// //           {item.seller_id}
// //           {item.seller_name}
// //           {item.name}
// //           {item.description}
// //           {item.size}
// //           {item.price}
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // };

// // export default GetItems;

// export async function getUserDetails() {
//   const { userId, redirectToSignIn } = await auth()
//   if (!userId) return redirectToSignIn()

//   try {
//     // Send userId to your backend
//     const response = await fetch("http://localhost:4000/userdetail/"+userId, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch user details");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching user details:", error);
//     throw error;
//   }
// }

// export async function getUserId() {
//   const { userId, redirectToSignIn } = await auth()
//   if (!userId) return redirectToSignIn()
//     console.log("User ID:", userId)
//   return userId
// }

// // Original getItems function
// export async function getItems() {
//   const { userId, redirectToSignIn } = await auth()
//   if (!userId) return redirectToSignIn()
  
//   try {
//     // Send userId to your backend
//     const response = await fetch("http://localhost:4000/items", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-User-ID": userId,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch items");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching items:", error);
//     throw error;
//   }
// }



