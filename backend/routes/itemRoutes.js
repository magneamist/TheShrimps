import express from "express";
import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from "../controllers/itemController.js";

const router = express.Router();

// Rutas para items
router.get("/item", getItems);
router.get("/item/:id(\\d+)", getItemById);
router.post("/item", createItem);
router.put("/item/:id(\\d+)", updateItem);
router.delete("/item/:id(\\d+)", deleteItem);

export default router;
