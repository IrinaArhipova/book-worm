const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Nikolya',
      email: 'nikin@mail.ru',
      password: await bcrypt.hash('12379856', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Migera',
      email: 'mig@mail.ru',
      password: await bcrypt.hash('123676', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Volfram',
      email: 'vol@mail.ru',
      password: await bcrypt.hash('125376', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Avdosia',
      email: 'avdo@mail.ru',
      password: await bcrypt.hash('12477', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Pelmeshka',
      email: 'pel@mail.ru',
      password: await bcrypt.hash('12477', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
