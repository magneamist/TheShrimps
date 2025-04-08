import express from "express";
import multer from "multer";
import path from "path";
import { Clerk } from "@clerk/clerk-sdk-node";
import { userDetailModel } from "../models/userDetailModel.js";

export const userDetailController = express.Router();

const clerk = new Clerk({ apiKey: process.env.CLERK_API_KEY });

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = clerk.jwt.verify(token);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

userDetailController.post("/signup", async (req, res) => {
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
});

userDetailController.post("/login", async (req, res) => {
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
});


userDetailController.get("/userdetail", verifyToken, async (req, res) => {
  try {
    const users = await userDetailModel.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting users." });
  }
});

userDetailController.get("/userdetail/:id([0-9]+)", verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userDetailModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting user." });
  }
});

userDetailController.post("/userdetail", verifyToken, upload.single("profile_image"), async (req, res) => {
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
});

userDetailController.put("/userdetail/:id([0-9]+)", verifyToken, upload.single("profile_image"), async (req, res) => {
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
});

userDetailController.delete("/userdetail/:id([0-9]+)", verifyToken, async (req, res) => {
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
});
