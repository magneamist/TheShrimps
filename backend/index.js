import express from 'express';
import dotenv from 'dotenv';
import { syncDB } from './models/index.js';
import userDetailRoutes from './routes/userDetailRoutes.js';
import itemRoutes from './routes/itemRoutes.js';  // Verifica que este esté importado correctamente

import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(ClerkExpressWithAuth());

// Asegúrate de que las rutas se registren correctamente
app.use("/api", userDetailRoutes);
app.use("/api", itemRoutes);

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
