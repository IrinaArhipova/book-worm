/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Books', [
      {
        nameBook: 'Грокаем алгоритмы',
        autor: 'Адитья Бхаргава',
        img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcv8.litres.ru%2Fpub%2Fc%2Fcover_max1500%2F39158380.jpg',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: 'Создаем нейронную сеть',
        autor: 'Тарик Рашид',
        img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcv3.litres.ru%2Fpub%2Fc%2Fcover_max1500%2F54815634.jpg',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: 'Код. Тайный язык информатики',
        autor: 'Чарльз Петцольд',
        img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcv5.litres.ru%2Fpub%2Fc%2Fcover_max1500%2F48447357.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: 'Java Script с нуля',
        autor: 'Кирупа Чиннатхамби',
        img: 'https://cv7.litres.ru/pub/c/cover_415/65486971.webp',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: 'Тестирование Java Script',
        autor: 'Лукас да Коста',
        img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcv8.litres.ru%2Fpub%2Fc%2Fcover_max1500%2F68677386.jpg',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Books');
  },
};
