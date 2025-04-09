'use strict';

export default {
  async up(queryInterface, Sequelize) {
    const itemsData = [
      {
        name: "Nike Sneakers",
        description: "State-of-the-art sports sneakers.",
        size: "M",
        price: 120,
        tag: "NEW",
        favorite: "NO",
        seller_id: 1,
        bought_id: null,
        image: "nike.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adidas T-shirt",
        description: "Cotton t-shirt with the Adidas logo.",
        size: "L",
        price: 45,
        tag: "SALE",
        favorite: "YES",
        seller_id: 2,
        bought_id: null, 
        image: "adidas.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    console.log('Data to insert into Items:', itemsData);
    await queryInterface.bulkInsert('Items', itemsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
