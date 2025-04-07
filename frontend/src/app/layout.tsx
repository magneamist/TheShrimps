import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ClerkProvider, SignIn, SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrimps",
  description: "An online vintage store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        throw new Error('Failed to fetch user details');
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
    <ClerkProvider>
      <html lang="en">
        <body className={`${urbanist.variable} antialiased`}>
          <SignedOut>
            <div className="flex items-center justify-center h-screen">
              <SignIn />
            </div>
          </SignedOut>
          <SignedIn>
            <main className="container mx-auto px-4 pt-4 pb-[68px]">
              {children}
            </main>
            <Navbar />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
