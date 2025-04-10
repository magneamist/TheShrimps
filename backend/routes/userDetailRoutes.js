import express from "express";
import { userDetailController } from "../controllers/userDetailController.js";  // Asegúrate de que la ruta esté correcta

const router = express.Router();

// Ruta para el signup (registro de usuario)
router.post("/signup", userDetailController.signup);

// Rutas sin autenticación
router.get("/userdetail", userDetailController.getUserDetails);
router.get("/userdetail/:id", userDetailController.getUserDetailById);
router.post("/userdetail", userDetailController.createUserDetail);
router.put("/userdetail/:id", userDetailController.updateUserDetail);
router.delete("/userdetail/:id", userDetailController.deleteUserDetail);

export default router;
