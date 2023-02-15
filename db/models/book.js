const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ User, Comment, Favorite }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'bookId' });
      this.hasMany(Favorite, { foreignKey: 'bookId' });
    }
  }
  Book.init({
    nameBook: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    autor: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
