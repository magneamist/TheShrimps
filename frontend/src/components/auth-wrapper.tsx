"use client";

import { ClerkProvider, SignIn, SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

// This component handles both the ClerkProvider and the auth state checking
function AuthContent({ children }: { children: React.ReactNode }) {
  const { session, isSignedIn, user } = useClerk(); // Obtiene la sesión y el usuario directamente
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<any>(null);

  // Función para obtener el token de la sesión
  useEffect(() => {
    const fetchToken = async () => {
      if (session) {
        try {
          const token = await session.getToken();
          setToken(token); // Establece el token cuando la sesión esté activa
        } catch (err) {
          console.error("Error getting token:", err);
          setError("Failed to get token.");
        }
      }
    };

    if (isSignedIn) {
      fetchToken();
    } else {
      setToken(null); // Reseteamos el token si no está firmado
    }
  }, [session, isSignedIn]);

  // Enviar solicitud al backend para obtener detalles de usuario
  const sendRequestToBackend = async () => {
    if (!token) return;

    setLoading(true); // Indicamos que estamos esperando la respuesta
    setError(null); // Resetear error antes de hacer la solicitud

    try {
      const response = await fetch("http://localhost:4000/api/userdetail", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Incluye el token en las cabeceras
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user details: ${response.statusText}`);
      }

      const data = await response.json();
      setUserDetails(data); // Guarda los detalles del usuario en el estado
      console.log("Response from backend:", data);
    } catch (error: any) {
      setError(`Error: ${error.message}`); // Guarda el error en el estado
      console.error("Error sending request:", error);
    } finally {
      setLoading(false); // Indicamos que ya se terminó de hacer la solicitud
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
          {loading && <p>Loading user details...</p>}
          {error && <p className="text-red-500">{error}</p>} {/* Muestra el error si ocurre */}
          {userDetails && (
            <div>
              <h2>User Details</h2>
              <pre>{JSON.stringify(userDetails, null, 2)}</pre> {/* Muestra los detalles del usuario */}
            </div>
          )}
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
