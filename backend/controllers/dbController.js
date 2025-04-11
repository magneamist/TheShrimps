// import express from 'express';
// // import dbConfig from '../configs/dbConfig.js';
// import sequelize from '../configs/dbConfig.js'

// export const dbController = express.Router();

// dbController.get('/test', async (req, res) => {
//     try {
//         await dbConfig.authenticate();
//         console.log('Connected.');
//         res.send('Connected to Database.');
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Could not connect.');
//     }
// })

// dbController.get('/sync', async (req, res) => {
//     try {
//         await dbConfig.sync({ force: true });
//         res.send('Synchronized.');
//     } catch (error) {
//         res.status(500).send('Error:', error);
//     }
// })