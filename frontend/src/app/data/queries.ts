import { auth } from "@clerk/nextjs/server";

export async function getUserDetails() {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()

  try {
    // Send userId to your backend
    const response = await fetch("http://localhost:4000/userdetail/"+userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
}

export async function getUserId() {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()
    console.log("User ID:", userId)
  return userId
}

// Original getItems function
export async function getItems() {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()
  
  try {
    // Send userId to your backend
    const response = await fetch("http://localhost:4000/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-User-ID": userId,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}