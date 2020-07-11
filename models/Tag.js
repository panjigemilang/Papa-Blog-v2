module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "tag",
    {
      tags: {
        type: DataTypes.STRING,
        set: function (val) {
          return this.setDataValue("tags", JSON.stringify(val))
        },
      },
    },
    {
      freezeTableName: true,
    }
  )

  Tag.associate = (models) => {
    Tag.belongsTo(models.post, {
      foreignKey: {
        name: "post_id",
        allowNull: false,
      },
    })
  }

  return Tag
}
