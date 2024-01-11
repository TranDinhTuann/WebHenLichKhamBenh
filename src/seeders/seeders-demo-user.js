'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@example.com',
      password: '123456',
      firstName: 'TuanTran',
      lastName: 'Tyrant',
      address: 'VN',
      phoneNumber: '0981634164',
      gender: 1,
      image: 'ảnh',
      roleId: 'R1',
      positionId: 'P0',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
