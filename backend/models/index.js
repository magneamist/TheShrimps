import Sequelize from 'sequelize';
import configFile from '../config/config.js';

import defineItem from './itemModel.js';
import defineUserDetail from './userDetailModel.js';
import defineItemFavorite from './itemFavoriteModel.js';
import defineUserFavorite from './userFavoriteModel.js';

// const env = process.env.NODE_ENV || 'development';
const env = 'development';
const config = configFile[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.UserDetail = defineUserDetail(sequelize);
db.Item = defineItem(sequelize);
db.UserFavorite = defineUserFavorite(sequelize);
db.ItemFavorite = defineItemFavorite(sequelize);

db.Item.belongsTo(db.UserDetail, { foreignKey: 'seller_id', as: 'seller' });
db.Item.belongsTo(db.UserDetail, { foreignKey: 'bought_id', as: 'buyer' });

db.ItemFavorite.belongsTo(db.UserDetail, { foreignKey: 'user_id', as: 'user' });
db.ItemFavorite.belongsTo(db.Item, { foreignKey: 'item_id', as: 'item' });

db.UserFavorite.belongsTo(db.UserDetail, { foreignKey: 'user_id', as: 'user' });
db.UserFavorite.belongsTo(db.UserDetail, { foreignKey: 'favorite_user_id', as: 'favoriteUser' });

db.syncDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Base de datos sincronizada.");
  } catch (err) {
    console.error("Error al sincronizar la base de datos:", err);
  }
};

export default db;
