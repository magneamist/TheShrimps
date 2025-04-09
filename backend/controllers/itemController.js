import { itemModel } from "../models/itemModel.js";
import multer from "multer";
import path from "path";

// Configuración de Multer directamente en el controlador
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada archivo
  },
});

const upload = multer({ storage }).single("image"); // Aceptar un solo archivo de imagen

export const getItems = async (req, res) => {
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
};

export const getItemById = async (req, res) => {
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
};

export const createItem = async (req, res) => {
  // Usamos Multer para manejar la imagen
  upload(req, res, async function (err) {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(500).json({ message: "Error uploading image" });
    }

    // Recogemos los datos del cuerpo de la petición
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

    // Validación de campos
    if (!name || !description || !price || !seller_id || !userSell_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Si la imagen no se subió correctamente
    const image = req.file ? req.file.filename : null;
    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    try {
      // Crear el nuevo item en la base de datos
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

      res.status(201).json(newItem); // Respondemos con el nuevo item
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating the item." });
    }
  });
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  // Usamos Multer para manejar la imagen
  upload(req, res, async function (err) {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(500).json({ message: "Error uploading image" });
    }

    try {
      const item = await itemModel.findByPk(id);

      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }

      // Recoger los datos del cuerpo de la petición
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

      // Si se subió una nueva imagen, usamos el nombre del archivo
      let image = req.file ? req.file.filename : item.image;

      // Actualizamos el item en la base de datos
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
};
