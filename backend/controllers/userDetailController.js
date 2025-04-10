import { Clerk } from "@clerk/clerk-sdk-node";
import db from "../models/index.js";

const { userDetailModel } = db;

const clerk = new Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

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

  getUserDetails: async (req, res) => {
    try {
      const users = await userDetailModel.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting users." });
    }
  },

  getUserDetailById: async (req, res) => {
    const { id } = req.params;

    try {
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

  createUserDetail: async (req, res) => {
    try {
      const {
        clerk_user_id,
        firstname,
        lastname,
        email,
        phoneNum,
        city,
        zip,
        billAddress,
        favorite,
      } = req.body;

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

  updateUserDetail: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await userDetailModel.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const {
        clerk_user_id,
        firstname,
        lastname,
        email,
        phoneNum,
        city,
        zip,
        billAddress,
        favorite,
      } = req.body;

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
