module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "admin",
    {
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      who: { type: DataTypes.STRING },
    },
    {
      freezeTableName: true,
    }
  )

  Admin.associate = (models) => {
    Admin.hasMany(models.post, {
      as: "admin_post",
      foreignKey: "admin_id",
      onDelete: "cascade",
    })
  }

  return Admin
}
