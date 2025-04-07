import express from "express";
import multer from "multer";
import path from "path";
import { itemModel } from "../models/itemModel.js";
import { userDetailModel } from "../models/userDetailModel.js";

export const itemController = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

itemController.get("/item", async (req, res) => {
  const { limit = 10, offset = 0 } = req.query;
  try {
    const items = await itemModel.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting items." });
  }
});

itemController.get("/item/:id([0-9]+)", async (req, res) => {
  try {
    const item = await itemModel.findOne({
      where: { id: req.params.id },
    });

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting the item." });
  }
});

itemController.post("/item", upload.single("image"), async (req, res) => {
  try {
    const {
      name,
      description,
      size,
      price,
      tag,
      favorite,
      seller_id,
      bought_id,
      userSell_id,
    } = req.body;

    if (!name || !description || !price || !seller_id || !userSell_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!name || !description || !price || !seller_id || !userSell_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const image = req.file ? req.file.filename : null;
    if (!image && !req.body.image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newItem = await itemModel.create({
      name,
      description,
      size,
      price,
      tag,
      favorite,
      seller_id,
      bought_id,
      image,
      userSell_id,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the item." });
  }
});

itemController.put(
  "/item/:id([0-9]+)",
  upload.single("image"),
  async (req, res) => {
    const { id } = req.params;
    try {
      const item = await itemModel.findByPk(id);

      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }

      const {
        name,
        description,
        size,
        price,
        tag,
        favorite,
        seller_id,
        bought_id,
      } = req.body;

      let image = req.file ? req.file.filename : item.image;

      await item.update({
        name,
        description,
        size,
        price,
        tag,
        favorite,
        seller_id,
        bought_id,
        image,
      });

      res.json({ message: "Item successfully updated", item });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating the item." });
    }
  }
);

itemController.delete("/item/:id([0-9]+)", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await itemModel.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await item.destroy();

    res.json({ message: "Item successfully deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the item." });
  }
});
