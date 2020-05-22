// Required modules
const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const passport = require("passport")
const db = require("./config/db")
const config = require("./config/config.json")
// const db = require("./models")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 5000

// Body Parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())

// DB Connection
// db.getModels(config, true)
//   .sync()
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
//   })

// Indo tutor
try {
  db.authenticate()
  console.log("Connection has been established successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}

// Routes
const user = require("./routes/api/users")
const posts = require("./routes/api/posts")

// Passport Middleware
app.use(passport.initialize())

// Passport config
require("./config/passport")(passport)

// use routes
app.use("/api/users", user)
app.use("/api/posts", posts)

// Access public folder
// app.use(
//   "/img/profilePicture",
//   express.static(
//     path.resolve(__dirname, "client", "public", "img", "profilePicture")
//   )
// )

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}
