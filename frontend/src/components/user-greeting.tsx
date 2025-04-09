"use client";
import { useUser } from "@clerk/clerk-react";

export function UserGreeting() {
  const { user } = useUser();

  console.log(user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return <h1>Hi, {user.firstName || "User"} </h1>;
}
