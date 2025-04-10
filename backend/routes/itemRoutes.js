import express from "express";
import * as itemController from "../controllers/itemController.js";

const router = express.Router();

router.get("/item", itemController.getItems); 
router.get("/item/:id([0-9]+)", itemController.getItemById);
router.post("/item", itemController.createItem);
router.put("/item/:id([0-9]+)", itemController.updateItem);
router.delete("/item/:id([0-9]+)", itemController.deleteItem);

export default router;
