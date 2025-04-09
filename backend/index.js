import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import path from 'path';
const __dirname = path.resolve()

import fileUpload from 'express-fileupload';

import { dbController } from './controllers/dbController.js'
import { itemController } from './controllers/itemController.js'
import { imageController } from './controllers/imageController.js';

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'files')))

app.get('/', (req, res) => {
    res.send('Landing')
})

app.listen(port, () => {
    console.log(`Servers runs at http://localhost:${port}`);
})

app.use(cors({ origin: "*" }))

app.use(fileUpload())

app.use(
    dbController,
    itemController,
    imageController
)

app.get('*', (req, res) => {
    res.status(404).json({
        message: "404"
    })
})
