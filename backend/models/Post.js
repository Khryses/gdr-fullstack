
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Post = sequelize.define("Post", {
  titolo: DataTypes.STRING,
  contenuto: DataTypes.TEXT,
  sezione: DataTypes.STRING,
  autore: DataTypes.STRING
});

module.exports = Post;
