// const Sequelize = require("sequelize")
// const db = require("../config/db")

// const User = db.define(
//   "user",
//   {
//     username: { type: Sequelize.STRING },
//     password: { type: Sequelize.STRING },
//     who: { type: Sequelize.STRING },
//   },
//   {
//     freezeTableName: true,
//   }
// )

// module.exports = User

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      who: { type: DataTypes.STRING },
    },
    {
      freezeTableName: true,
    }
  )

  return User
}
