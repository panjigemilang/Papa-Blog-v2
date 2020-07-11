module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define(
    "picture",
    {
      pathname: { type: DataTypes.STRING },
    },
    {
      freezeTableName: true,
    }
  )

  Picture.associate = (models) => {
    Picture.belongsTo(models.post, {
      foreignKey: {
        name: "post_id",
        allowNull: false,
      },
    })
  }

  return Picture
}
