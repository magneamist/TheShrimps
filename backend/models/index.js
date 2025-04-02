import sequelize from '../configs/dbConfig.js'

import { itemModel } from "./itemModel.js";
import { itemFavoriteModel } from "./itemFavoriteModel.js";
import { userDetailModel } from "./userDetailModel.js";
import { userFavoriteModel } from "./userFavoriteModel.js";

userDetailModel.hasMany(itemModel, { foreignKey: "userSell_id", as: "itemsSold" });
userDetailModel.hasMany(itemModel, { foreignKey: "bought_id", as: "itemsBought" });

userDetailModel.hasMany(userFavoriteModel, { foreignKey: "user_id", as: "favorites" });
userDetailModel.hasMany(userFavoriteModel, { foreignKey: "favorite_user_id", as: "favoritedBy" });

userDetailModel.hasMany(itemFavoriteModel, { foreignKey: "user_id", as: "favoriteItems" });
itemModel.hasMany(itemFavoriteModel, { foreignKey: "item_id", as: "favoritedByUsers" });

// const sequelize = require("../configs/dbConfig");
// const User = require("./userDetail_Model");
// const Item = require("./item_Model");
// const UserFavorites = require("./userFavorites_Model");
// const ItemFavorites = require("./itemFavorites_Models");

// // Relaciones
// User.hasMany(Item, { foreignKey: "userSell_id", as: "itemsSold" });
// User.hasMany(Item, { foreignKey: "bought_id", as: "itemsBought" });

// User.hasMany(UserFavorites, { foreignKey: "user_id", as: "favorites" });
// User.hasMany(UserFavorites, { foreignKey: "favorite_user_id", as: "favoritedBy" });

// User.hasMany(ItemFavorites, { foreignKey: "user_id", as: "favoriteItems" });
// Item.hasMany(ItemFavorites, { foreignKey: "item_id", as: "favoritedByUsers" });

// const syncDB = async () => {
//     try {
//         await sequelize.sync({ force: true });
//         console.log("Base de datos sincronizada.");
//     } catch (error) {
//         console.error("Error al sincronizar la base de datos:", error);
//     }
// };

// module.exports = { User, Item, UserFavorites, ItemFavorites, syncDB };
