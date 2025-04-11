import express from "express";
import { userDetailController } from "../controllers/userDetailController.js";

const router = express.Router();

router.post("/signup", userDetailController.signup);

router.get("/userdetail", userDetailController.getUserDetails);
router.get("/userdetail/:id(\\d+)", userDetailController.getUserDetailById);
router.post("/userdetail", userDetailController.createUserDetail);
router.put("/userdetail/:id(\\d+)", userDetailController.updateUserDetail);
router.delete("/userdetail/:id(\\d+)", userDetailController.deleteUserDetail);

export default router;

