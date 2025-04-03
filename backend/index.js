import express from 'express';
import dotenv from 'dotenv';
import { syncDB } from './models/index.js';  // Importación de la función syncDB
import { dbController } from './controllers/dbController.js';
import { itemController } from './controllers/itemController.js';

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(dbController, itemController);

app.get('*', (req, res) => {
    res.status(404).json({
        message: "404 Not Found"
    });
});


const startServer = async () => {
    try {
        await syncDB();
        
        app.listen(port, () => {
            console.log(`Servidor en ejecución en http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
        process.exit(1);
    }
};

startServer();
