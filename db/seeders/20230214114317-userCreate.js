'use strict';
const { User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        email: 'gamer@mail.ru',
        password: '123123',
      },
      {
        email: 'gamerPro@mail.ru',
        password: '321321',
      },
      {
        email: 'gamerPRO@mail.ru',
        password: '132132',
      },
      {
        email: 'pussy_destroyer@mail.ru',
        password: '777777',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
