import sequelize from '../configs/dbConfig.js';

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

const syncDB = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Base de datos sincronizada.");
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
    }
};

export { userDetailModel, itemModel, userFavoriteModel, itemFavoriteModel, syncDB };
