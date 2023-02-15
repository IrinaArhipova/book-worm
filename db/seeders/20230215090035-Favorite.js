/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Favorites', [{
      userId: 1,
      bookId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      bookId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      bookId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      bookId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      bookId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Favorites');
  },
};
