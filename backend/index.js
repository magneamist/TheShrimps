import express from 'express';
import dotenv from 'dotenv';
import { syncDB } from './models/index.js';
import { dbController } from './controllers/dbController.js';
import { itemController } from './controllers/itemController.js';
import { userDetailController } from './controllers/userDetailController.js';
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node'; // 👈 importar Clerk

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 👇 Clerk middleware - ¡esto es clave!
app.use(ClerkExpressWithAuth());

// Tus rutas
app.use(dbController, itemController, userDetailController);

// Ruta 404 por si no matchea ninguna
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
