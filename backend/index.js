import express from 'express';
import cors from 'cors';  // Asegúrate de importar CORS

// import dotenv from 'dotenv';
// dotenv.config({ path: '.env.local' });
// import { syncDB } from './models/index.js';
import userDetailRoutes from './routes/userDetailRoutes.js';
import itemRoutes from './routes/itemRoutes.js';  // Verifica que este esté importado correctamente
// import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
// import db from './models/index.js'

const port = process.env.PORT || 8080;
const app = express();
// const db = require("./models");

// Habilitar CORS antes de las rutas
app.use(cors({
  origin: "*",  // Cambia a la URL de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Resto de configuración
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(ClerkExpressWithAuth());  // Middleware de Clerk para autenticación

// Rutas
app.use("/api", itemRoutes);
app.use("/api", userDetailRoutes);


// Ruta de error 404
app.get('*', (req, res) => {
    res.status(404).json({
        message: "404 Not Found"
    });
});

// Inicia el servidor
const startServer = async () => {
    try {
        // await db.syncDB();

        app.listen(port, () => {
            console.log(`Servidor en ejecución en http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
        process.exit(1);
    }
};

startServer();
