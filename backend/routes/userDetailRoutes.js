import express from "express";
import { userDetailController } from "../controllers/userDetailController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// router.post("/signup", userDetailController.signup);
// router.post("/login", userDetailController.login);
// router.get("/userdetail", verifyToken, userDetailController.getUserDetails);
// router.get("/userdetail/:id", verifyToken, userDetailController.getUserDetailById);
// router.post("/userdetail", verifyToken, userDetailController.createUserDetail);
// router.put("/userdetail/:id", verifyToken, userDetailController.updateUserDetail);
// router.delete("/userdetail/:id", verifyToken, userDetailController.deleteUserDetail);


router.post("/signup", userDetailController.signup);
router.post("/login", userDetailController.login);
router.get("/userdetail", userDetailController.getUserDetails);
router.get("/userdetail/:id", userDetailController.getUserDetailById);
router.post("/userdetail", userDetailController.createUserDetail);
router.put("/userdetail/:id", userDetailController.updateUserDetail);
router.delete("/userdetail/:id", userDetailController.deleteUserDetail);

export default router;
