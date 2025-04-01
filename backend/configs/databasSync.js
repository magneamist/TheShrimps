// backend/config/sync.js
const sequelize = require('./database');

const syncDB = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Base de datos sincronizada y tablas recreadas.");
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
    }
};

module.exports = { syncDB };
