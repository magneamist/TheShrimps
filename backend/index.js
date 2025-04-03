import express from 'express';
import dotenv from 'dotenv';

import fileUpload from 'express-fileupload';
import path from 'path';
const __dirname = path.resolve();

import { dbController } from './controllers/dbController.js'
import { itemController } from './controllers/itemController.js'

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Landing')
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: "404"
    })
})

app.listen(port, () => {
    console.log(`Servers runs at http://localhost:${port}`);
})

app.use(
    dbController,
    itemController
)

app.use(fileUpload())

app.post('/fileupload', (req, res) => {
    const { image } = req.files

    if (!image) return res.sendStatus(400)

    image.mv(__dirname + '/files/' + image.name)

    res.sendStatus(200)
})
