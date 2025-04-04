'use strict';

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserDetails', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      clerk_user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phoneNum: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      billAddress: {
        type: Sequelize.STRING
      },
      favorite: {
        type: Sequelize.ENUM("YES", "NO")
      },
      profile_image: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserDetails');
  }
};
