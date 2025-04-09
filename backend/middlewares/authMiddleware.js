import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({ apiKey: process.env.CLERK_SECRET_KEY });


export const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization']?.replace('Bearer ', ''); // Obtiene el token del header

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    const user = await clerk.sessions.verifySession(token);  // Verifica el token con Clerk

    if (!user) {
      console.error("User not found with the token.");
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;  // Agrega el usuario a la solicitud
    next();  // Llama al siguiente middleware o controlador
  } catch (error) {
    console.error("Error verifying session:", error);
    res.status(500).json({ message: "Error verifying token." });
  }
};
