'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const User = loader.database.define('users', { //データベースのカラム名を'users'
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false　//null値を許可しない.デフォルトはtrueになっている。
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
  });

module.exports = User;