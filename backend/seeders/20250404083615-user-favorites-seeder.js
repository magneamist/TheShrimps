'use strict';

export default {
  async up(queryInterface, Sequelize) {
    const userFavoritesData = [
      { user_id: 1, favorite_user_id: 2, created_at: new Date() },
      { user_id: 2, favorite_user_id: 1, created_at: new Date() }
    ];

    console.log('Inserting into UserFavorites:', userFavoritesData);
    await queryInterface.bulkInsert('UserFavorites', userFavoritesData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserFavorites', null, {});
  }
};
