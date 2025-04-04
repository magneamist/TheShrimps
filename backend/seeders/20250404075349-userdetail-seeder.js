'use strict';

export default {
  async up(queryInterface, Sequelize) {
    const usersData = [
      {
        clerk_user_id: "clerk_12345",
        firstname: "Juan",
        lastname: "Pérez",
        email: "juan.perez@example.com",
        phoneNum: "123456789",
        city: "Madrid",
        zip: "28001",
        billAddress: "Calle Mayor 123",
        favorite: "NO", // Enum value: YES or NO
        profile_image: "default.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clerk_user_id: "clerk_67890",
        firstname: "Maria",
        lastname: "López",
        email: "maria.lopez@example.com",
        phoneNum: "987654321",
        city: "Barcelona",
        zip: "08001",
        billAddress: "Avenida Diagonal 456",
        favorite: "YES", // Enum value: YES or NO
        profile_image: "default.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    console.log('Data to insert into UserDetails:', usersData);
    await queryInterface.bulkInsert('UserDetails', usersData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserDetails', null, {});
  }
};
