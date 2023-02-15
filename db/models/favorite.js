const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Book, { foreignKey: 'bookId' });
    }
  }
  Favorite.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    bookId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
