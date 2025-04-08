import { Clerk } from "@clerk/clerk-sdk-node";
import { userDetailModel } from "../models/userDetailModel.js";

const clerk = new Clerk({ apiKey: process.env.CLERK_API_KEY });

export const userDetailController = {
  signup: async (req, res) => {
    try {
      const { email, password, firstname, lastname } = req.body;

      if (!email || !password || !firstname || !lastname) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const user = await clerk.users.create({
        email,
        password,
        firstName: firstname,
        lastName: lastname,
      });

      const session = await clerk.sessions.create({ userId: user.id });

      const newUser = await userDetailModel.create({
        clerk_user_id: user.id,
        firstname,
        lastname,
        email,
        profile_image: null,
      });

      res.status(201).json({
        message: "User created successfully",
        token: session.jwtToken,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error signing up." });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
      }

      const user = await clerk.users.verifyPassword({ email, password });

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const session = await clerk.sessions.create({ userId: user.id });

      res.json({
        message: "Login successful",
        token: session.jwtToken,
        clerk_user_id: user.id,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error logging in." });
    }
  },

  // Método para obtener detalles del usuario desde la base de datos
  getUserDetails: async (req, res) => {
    try {
      const token = req.headers['authorization']?.replace('Bearer ', ''); // Obtener el token de la cabecera

      if (!token) {
        return res.status(400).json({ message: "Token is required" });
      }

      // Verificar el token con Clerk
      const user = await clerk.sessions.verifySession(token);

      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Si el token es válido, obtenemos los detalles de los usuarios
      const users = await userDetailModel.findAll();
      res.json(users);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting users." });
    }
  },

  // Método para obtener los detalles de un usuario específico por su ID
  getUserDetailById: async (req, res) => {
    const { id } = req.params;

    try {
      const token = req.headers['authorization']?.replace('Bearer ', '');

      if (!token) {
        return res.status(400).json({ message: "Token is required" });
      }

      // Verificar el token con Clerk
      const user = await clerk.sessions.verifySession(token);

      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userDetail = await userDetailModel.findByPk(id);
      if (!userDetail) {
        return res.status(404).json({ message: "User not found." });
      }

      res.json(userDetail);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting user." });
    }
  },

  // Crear detalles del usuario
  createUserDetail: async (req, res) => {
    try {
      const { clerk_user_id, firstname, lastname, email, phoneNum, city, zip, billAddress, favorite } = req.body;

      if (!clerk_user_id || !firstname || !lastname || !email) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const profile_image = req.file ? req.file.filename : null;

      const newUser = await userDetailModel.create({
        clerk_user_id,
        firstname,
        lastname,
        email,
        phoneNum,
        city,
        zip,
        billAddress,
        favorite,
        profile_image,
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating user." });
    }
  },

  // Actualizar detalles del usuario
  updateUserDetail: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await userDetailModel.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const { clerk_user_id, firstname, lastname, email, phoneNum, city, zip, billAddress, favorite } = req.body;

      let profile_image = req.file ? req.file.filename : user.profile_image;

      await user.update({
        clerk_user_id,
        firstname,
        lastname,
        email,
        phoneNum,
        city,
        zip,
        billAddress,
        favorite,
        profile_image,
      });

      res.json({ message: "User successfully updated", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating user." });
    }
  },

  // Eliminar detalles del usuario
  deleteUserDetail: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await userDetailModel.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      await user.destroy();

      res.json({ message: "User successfully deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting user." });
    }
  }
};
