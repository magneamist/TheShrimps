"use client";

import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  useClerk,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

// This component handles both the ClerkProvider and the auth state checking
function AuthContent({ children }: { children: React.ReactNode }) {
  const { session, isSignedIn } = useClerk();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (session) {
        const token = await session.getToken();
        setToken(token);
      }
    };

    if (isSignedIn) {
      fetchToken();
    }
  }, [session, isSignedIn]);

  const sendRequestToBackend = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:4000/userdetail", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const data = await response.json();
      console.log("Response from backend:", data);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  useEffect(() => {
    if (token) {
      sendRequestToBackend();
    }
  }, [token]);

  return (
    <>
      <SignedOut>
        <div className="flex items-center justify-center h-screen">
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        <main className="container mx-auto px-4 pt-4 h-(--screen-wo-navbar)">
          {children}
        </main>
        <Navbar />
      </SignedIn>
    </>
  );
}

// The main wrapper that provides both the ClerkProvider and handles auth logic
export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <AuthContent>{children}</AuthContent>
    </ClerkProvider>
  );
}
