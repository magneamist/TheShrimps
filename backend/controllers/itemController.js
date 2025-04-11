import db from "../models/index.js";
import multer from "multer";
import path from "path";

const { Item } = db;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }).single("image");

export const getItems = async (req, res) => {
  const { limit = 10, offset = 0 } = req.query;
  try {
    const items = await Item.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting items." });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findOne({
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
};

export const createItem = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(500).json({ message: "Error uploading image" });
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
      userSell_id,
    } = req.body;

    if (!name || !description || !price || !seller_id || !userSell_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const image = req.file ? req.file.filename : null;
    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    try {
      const newItem = await Item.create({
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
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  upload(req, res, async function (err) {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(500).json({ message: "Error uploading image" });
    }

    try {
      const item = await Item.findByPk(id);

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
  });
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await item.destroy();

    res.json({ message: "Item successfully deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the item." });
  }
};
