import express from 'express';
import { itemModel } from '../models/itemModel.js';

export const itemController = express.Router();

import path from 'path';

const __dirname = path.resolve();

itemController.get('/item', async (req, res) => {
    try {
        const result = await itemModel.findAll();
        res.json(result);
    } catch (error) {
        console.error(error)
    }
})

itemController.get('/item/:id([0-9]+)', async (req, res) => {
    try {
        const result = await itemModel.findOne({
            where: { id: req.params.id }
        });
        res.json(result);
    } catch (error) {
        console.error(error);
    }
})

itemController.post('/item', async (req, res) => {
    console.log('OK')
    try {
        if (!req.files || !req.files.image) {
            return res.status(400).send('No image file uploaded.');
        }

        const image = req.files.image;

        await image.mv(__dirname + '/files/' + image.name);

        const price = parseInt(req.body.price);

        const imageName = image.name;

        const result = await itemModel.create({ ...req.body, imageName, price });

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


itemController.put('/item/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const result = await itemModel.update(req.body, {
            where: { id: id }
        });
        res.json({id, ...req.body});
    } catch (error) {
        console.error(error);
    }
})

itemController.delete('/item/:id([0-9]+)', async (req, res) => {
    try {
        const result = await itemModel.destroy({
            where: { id: req.params.id }
        });
        res.json({message: "Record deleted."});
    } catch (error) {
        console.error(error);
    }
})