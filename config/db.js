const sequelize = require("sequelize")
const mysql2 = require("mysql2")

const db = new sequelize("papa-v2", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
  logging: false,
})

db.sync({})

module.exports = db
