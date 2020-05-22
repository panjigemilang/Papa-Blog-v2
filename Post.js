const Sequelize = require("sequelize")
const db = require("../config/db")

const Post = db.define(
  "post",
  {
    title: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    picture: {
      type: Sequelize.STRING,
      set: function (val) {
        return this.setDataValue("picture", JSON.stringify(val))
      },
      get: function () {
        return JSON.parse(this.getDataValue("picture"))
      },
    },
  },
  {
    freezeTableName: true,
  }
)

module.exports = Post
