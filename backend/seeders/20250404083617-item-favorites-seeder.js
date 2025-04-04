'use strict';

export default {
  async up(queryInterface, Sequelize) {
    const itemFavoritesData = [
      { user_id: 1, item_id: 1 },
      { user_id: 2, item_id: 2 }
    ];

    console.log('Inserting into ItemFavorites:', itemFavoritesData);
    await queryInterface.bulkInsert('ItemFavorites', itemFavoritesData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ItemFavorites', null, {});
  }
};
