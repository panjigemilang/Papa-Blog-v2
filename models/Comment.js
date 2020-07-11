module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comment",
    {
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING },
      picture: {
        type: DataTypes.STRING,
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

  Comment.associate = (models) => {
    Comment.belongsToMany(models.user, {
      through: "users_comments",
    })

    Comment.belongsToMany(models.post, {
      through: "post_comments",
    })
  }

  return Comment
}
