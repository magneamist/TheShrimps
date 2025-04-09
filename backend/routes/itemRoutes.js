import express from "express";
import * as itemController from "../controllers/itemController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/item", itemController.getItems); 
router.get("/item/:id([0-9]+)", itemController.getItemById);
router.post("/item", verifyToken, itemController.createItem);
router.put("/item/:id([0-9]+)", verifyToken, itemController.updateItem);
router.delete("/item/:id([0-9]+)", verifyToken, itemController.deleteItem);

export default router;
