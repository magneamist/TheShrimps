import express from 'express';
import fs from 'fs';

export const imageController = express.Router();

imageController.get('/images', async (req, res) => {
    try {
        const files = fs.readdirSync('./files', (err, files) => {
            return files.forEach(file => {
                console.log(file);
            })
        })
        res.json(files);
    } catch (error) {
        console.error(error)
    }
})