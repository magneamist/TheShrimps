import express from 'express';
import multer from 'multer';
import path from 'path';
import { userDetailModel } from '../models/userDetailModel.js';

export const userDetailController = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

userDetailController.get('/userdetail', async (req, res) => {
  try {
    const users = await userDetailModel.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting users.' });
  }
});

userDetailController.get('/userdetail/:id([0-9]+)', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userDetailModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting user.' });
  }
});

userDetailController.post('/userdetail', upload.single('profile_image'), async (req, res) => {
  try {
    const { clerk_user_id, firstname, lastname, email, phoneNum, city, zip, billAddress, favorite } = req.body;

    if (!clerk_user_id || !firstname || !lastname || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
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
      profile_image
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user.' });
  }
});

userDetailController.put('/userdetail/:id([0-9]+)', upload.single('profile_image'), async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userDetailModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
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
      profile_image
    });

    res.json({ message: 'User successfully updated', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user.' });
  }
});

userDetailController.delete('/userdetail/:id([0-9]+)', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userDetailModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    await user.destroy();

    res.json({ message: 'User successfully deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user.' });
  }
});
