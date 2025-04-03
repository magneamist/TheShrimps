import express from 'express';
import dotenv from 'dotenv';

// Importar los modelos y la función de sincronización desde `models/index.js`
import { userDetailModel, itemModel, userFavoriteModel, itemFavoriteModel, syncDB } from './models/index.js';

import { dbController } from './controllers/dbController.js';
import { itemController } from './controllers/itemController.js';

dotenv.config();

// Definir el puerto
const port = process.env.PORT || 4000;

// Crear la instancia de Express
const app = express();

// Middleware para poder recibir datos del cuerpo de la petición
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Usar los controladores en las rutas de la app
app.use(
    dbController,   // Aquí manejarás cosas como la conexión y la sincronización de la DB
    itemController  // Aquí manejarás la lógica de los artículos
);

// Ruta para manejar peticiones no encontradas (404)
app.get('*', (req, res) => {
    res.status(404).json({
        message: "404 Not Found"
    });
});

// Sincronizar la base de datos y arrancar el servidor
const startServer = async () => {
    try {
        // Sincronizar los modelos con la base de datos
        await syncDB();  // Esto llama a la función `syncDB` del archivo `models/index.js`
        
        // Arrancar el servidor en el puerto especificado
        app.listen(port, () => {
            console.log(`Servidor en ejecución en http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
    }
};

// Llamar a la función para arrancar el servidor
startServer();
