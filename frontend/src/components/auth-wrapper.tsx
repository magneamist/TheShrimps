"use client";

import { ClerkProvider, SignIn, SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

// This component handles both the ClerkProvider and the auth state checking
function AuthContent({ children }: { children: React.ReactNode }) {
  const { session, isSignedIn, user } = useClerk(); // Obtiene la sesión y el usuario directamente
  const [token, setToken] = useState<string | null>(null);

  // Función para obtener el token de la sesión
  useEffect(() => {
    const fetchToken = async () => {
      if (session) {
        const token = await session.getToken();
        setToken(token); // Establece el token cuando la sesión esté activa
      }
    };

    if (isSignedIn) {
      fetchToken();
    }
  }, [session, isSignedIn]);

  // Enviar solicitud al backend para obtener detalles de usuario
  const sendRequestToBackend = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:4000/userdetail", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Incluye el token en las cabeceras
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

  // Llamar al backend cada vez que el token cambie
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

// El componente principal que maneja la autenticación y los detalles del usuario
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
