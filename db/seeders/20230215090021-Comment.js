/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Comments', [{
      userId: 1,
      bookId: 1,
      comment: 'Хорошая книга. Для начинающих программистов будет полезной. Можно использовать при преподавании информатики и курсов программированиия.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      bookId: 2,
      comment: 'Книга очень понравилась. Доходчиво и подробно объясняется как работает простейшая нейронная сеть: приводится математика её работы с пояснением расчетов.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      bookId: 3,
      comment: 'Великолепное изложение, сложные вещи написаны понятным языком. рекомендую!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      bookId: 4,
      comment: 'Нормик)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      bookId: 5,
      comment: 'Довольно не плохая книга, которая в полной мере раскрывает тему автоматизированного тестирования. Вся необходимая теория здесь есть, тестирование серверных приложений, тестирование клиентских приложений, разработка через тестирование (TDD), тестирование компонентов React, сквозные тесты на основе UI, и т.д., куча примеров., картинок, и прочее. В общем, если хотите погрузиться в унылый мир тестов, то welcome.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comments');
  },
};
