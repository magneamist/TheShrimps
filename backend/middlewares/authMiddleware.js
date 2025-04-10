// import { Clerk } from "@clerk/clerk-sdk-node";

// // Inicializa Clerk con tu clave secreta
// const clerk = new Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

// export const verifyToken = async (req, res, next) => {
//   const token = req.headers['authorization']?.replace('Bearer ', ''); // Obtiene el token del header

//   if (!token) {
//     // console.error("Token is missing in request header.");
//     return res.status(400).json({ message: "Token is required" });
//   }

//   try {
//     console.log("Verifying token: ", token);  // Debugging

//     // Verifica el token con Clerk
//     const user = await clerk.sessions.verifySession(token);

//     if (!user) {
//       console.error("User not found with the token.");
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     // Agrega el usuario verificado a la solicitud
//     req.user = user;
//     console.log("User verified: ", user);  // Debugging

//     next();  // Llama al siguiente middleware o controlador
//   } catch (error) {
//     console.error("Error verifying session:", error);  // Log completo del error
//     res.status(500).json({ message: "Error verifying token." });
//   }
// };
