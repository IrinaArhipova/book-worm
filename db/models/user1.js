const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Book, Comment, Favorite }) {
      this.hasMany(Book, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.hasMany(Favorite, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
