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

router.get("/users", (req, res) =>
  res.json({
    message: "users works",
  })
)

// Register New User
router.post("/register", (req, res) => {
  const { errors, isValid } = validationRegister(req.body)
  const model = req.body.who === "admin" ? db.admin : db.user

  if (!isValid) {
    return res.status(400).json(errors)
  }

  model
    .findOne({
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
            const newUser = model.build({
              username: req.body.username,
              email: req.body.email,
              password: hash,
              who: req.body.who,
            })

            // saving user to DB
            newUser
              .save()
              .then((user) => res.status(200).json(user.dataValues))
              .catch((err) => {
                console.log(err)
                return res
                  .status(400)
                  .json({ messages: "error add user", errors: err.toString() })
              })
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
  const model = req.body.who === "admin" ? db.admin : db.user

  const { errors, isValid } = validationLogin(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  // find user by username
  model
    .findOne({
      where: { username },
    })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          username: "username not found",
        })
      } else {
        bcrypt.compare(password, user.dataValues.password).then((isMatch) => {
          if (isMatch) {
            // create payload
            const payload = {
              id: user.dataValues.id,
              name: user.dataValues.username,
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
                  payload,
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

// get User with all the posts
router.get("/:user", (req, res) => {
  db.admin
    .findAll({
      include: ["admin_post"],
    })
    .then((posts) => res.status(200).json(posts))
    .catch((err) =>
      res.status(400).json({
        errors: err,
      })
    )
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
