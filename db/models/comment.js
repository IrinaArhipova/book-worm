const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Book, { foreignKey: 'bookId' });
    }
  }
  Comment.init({
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
    comment: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
