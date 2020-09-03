// const Sequelize = require("sequelize")
// const db = require("../config/db")

// const Post = db.define(
//   "post",
//   {
//     title: { type: Sequelize.STRING },
//     content: { type: Sequelize.STRING },
//     picture: {
//       type: Sequelize.STRING,
//       set: function (val) {
//         return this.setDataValue("picture", JSON.stringify(val))
//       },
//       get: function () {
//         return JSON.parse(this.getDataValue("picture"))
//       },
//     },
//   },
//   {
//     freezeTableName: true,
//   }
// )

// module.exports = Post

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "post",
    {
      title: { type: DataTypes.STRING },
      content: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
    }
  )

  Post.associate = (models) => {
    Post.hasMany(models.picture, {
      as: "post_picture",
      foreignKey: "post_id",
      onDelete: "cascade",
      hooks: true,
    })

    Post.hasMany(models.tag, {
      as: "tags",
      foreignKey: "post_id",
      onDelete: "cascade",
      hooks: true,
    })
  }

  return Post
}
