import express from "express";
import { userDetailController } from "../controllers/userDetailController.js";  // Asegúrate de que la ruta esté correcta
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Ruta para el signup (registro de usuario)
router.post("/signup", userDetailController.signup);

// Rutas que requieren autenticación
router.get("/userdetail", verifyToken, userDetailController.getUserDetails);
router.get("/userdetail/:id", verifyToken, userDetailController.getUserDetailById);
router.post("/userdetail", verifyToken, userDetailController.createUserDetail);
router.put("/userdetail/:id", verifyToken, userDetailController.updateUserDetail);
router.delete("/userdetail/:id", verifyToken, userDetailController.deleteUserDetail);

export default router;
