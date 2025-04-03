import sequelize from '../configs/dbConfig.js';
import { DataTypes, Model } from 'sequelize';

import { itemModel } from '../models/itemModel.js';
import { userDetailModel } from '../models/userDetailModel.js';

export class itemFavoriteModel extends Model {}

itemFavoriteModel.init({
    user_id: {
        type: DataTypes.INTEGER,
        allownull: false
    },

    item_id: {
        type: DataTypes.INTEGER,
        allownull: false
    },
});

itemFavoriteModel.belongsTo(itemModel, { foreignKey: "item_id", as: "item"})
itemFavoriteModel.belongsTo(userDetailModel, { foreignKey: "user_id", as: "user"})

