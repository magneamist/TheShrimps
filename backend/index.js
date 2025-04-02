import express from 'express'
import dotenv from 'dotenv'

import { dbController } from './controllers/dbController.js'
import { itemController } from './controllers/itemController.js'

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(
    dbController,
    itemController
)

app.get('*', (req, res) => {
    res.status(404).json({
        message: "404"
    })
})

app.listen(port, () => {
    console.log(`Servers runs at http://localhost:${port}`);
})
