const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const passport = require("passport")
const config = require("../../config/config.json")

// Model
const db = require("../../models")

// Key
const keys = require("../../config/keys")

// Validation
const validationRegister = require("../../validation/register")
const validationLogin = require("../../validation/login")

console.log("User", db.getModels(config))

router.get("/users", (req, res) =>
  res.json({
    message: "users works",
  })
)

// Register New User
router.post("/register", (req, res) => {
  const { errors, isValid } = validationRegister(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  // Check for user email if exists
  db.getModels(config)
    .User.findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((found) => {
      if (!found) {
        // bcrypting password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            // make new user
            const newUser = db.getModels(config).User.build({
              username: req.body.username,
              email: req.body.email,
              password: hash,
            })

            // saving user to DB
            newUser
              .save()
              .then((user) => res.status(200).json(user.returning))
              .catch((err) => console.log(err))
          })
        })
      } else {
        res.status(400).json({
          errors: "Username telah terdaftar",
        })
      }
    })
    .catch((err) => {
      return res.json(err)
    })
})

// Login User
router.post("/login", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const { errors, isValid } = validationLogin(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  // find user by username
  db.getModels(config)
    .User.findOne({
      where: { username },
    })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          username: "user not found",
        })
      } else {
        bcrypt.compare(password, user.dataValues.password).then((isMatch) => {
          if (isMatch) {
            // create payload
            const payload = {
              id: user.dataValues.id,
              name: user.dataValues.name,
              avatar: user.dataValues.avatar,
            }

            // Sign token
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 3600,
              },
              (err, token) => {
                res.json({
                  success: true,
                  // use Bearer protocol format
                  token: "Bearer " + token,
                })
              }
            )
          } else {
            return res.status(400).json({
              password: "password incorrect",
            })
          }
        })
      }
    })
})

// Passport route
router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      username: req.user.username,
    })
  }
)

module.exports = router
