const express = require("express")
const router = express.Router()
const passport = require("passport")
const fs = require("fs")

// Model
const models = require("../../models")

// Validation
const validationPost = require("../../validation/post")
const isEmpty = require("../../validation/is-empty")
const { json } = require("body-parser")

// Get all Posts
router.get("/", (req, res) => {
  models.post
    .findAll({
      subQuery: false,
      order: [["createdAt", "DESC"]],
      include: ["post_picture", "tags"],
    })
    .then((posts) => {
      if (posts) {
        return res.status(200).json(posts)
      } else {
        return res.status(404).json({
          messages: "No post found",
        })
      }
    })
})

// get Posts by limit and offset
router.post("/:limit", (req, res) => {
  const limit = parseInt(req.params.limit)
  const offset = req.body.offset ? parseInt(req.body.offset) : 0

  models.post
    .findAll({
      subQuery: false,
      order: [["createdAt", "DESC"]],
      include: ["post_picture", "tags"],
      limit,
      offset,
    })
    .then((posts) => {
      if (posts) {
        return res.status(200).json(posts)
      } else {
        return res.status(404).json({
          messages: "No post found",
        })
      }
    })
})

// get Post by ID
router.get("/post/:id", (req, res) => {
  models.post
    .findAll({
      order: [["createdAt", "DESC"]],
      include: ["post_picture", "tags"],
      where: {
        id: req.params.id,
      },
    })
    .then((post) => {
      if (post) {
        return res.status(200).json(post)
      } else {
        return res.status(404).json({
          messages: "No post found",
        })
      }
    })
})

// Add Post
router.post(
  "/add",
  // passport.authenticate("jwt", {
  //   session: false
  // }),
  (req, res) => {
    const { errors, isValid } = validationPost(req.body)

    // set unique ID for images
    let img_id,
      images = []

    if (!isValid) {
      return res.status(400).json(errors)
    }

    // if there's an image, Insert it to local storage
    if (!isEmpty(req.body.images)) {
      req.body.images.map((item, i) => {
        img_id = new Date().getTime()
        const filename = `image-${img_id}`
        const extension = item.match(
          /png?(?=;base64)|jpg?(?=;base64)|jpeg?(?=;base64)/
        )[0]

        images.push({ pathname: `/img/${filename}.${extension}` })

        fs.writeFile(
          `./client/public/img/${filename}.${extension}`,
          item.match(/,(.*)/)[1],
          { encoding: "base64" },
          (err) => {
            if (err) {
              console.log("error boss :\n", err)
            } else {
              console.log("Image upload success")
            }
          }
        )
      })
    }

    models.post
      .create({
        title: req.body.title,
        content: req.body.content,
      })
      .then((post) => {
        // Add images
        if (!isEmpty(req.body.images)) {
          images.map((item, i) => (images[i].post_id = post.id))

          models.picture
            .bulkCreate(images, { returning: true })
            .then((pict) => console.log("Berhasil insert images to DB"))
            .catch((err) => console.log("Error insert images to DB", err))
        }

        // Add Tags
        if (!isEmpty(req.body.tags)) {
          models.tag
            .create({
              tags: req.body.tags,
              post_id: post.id,
            })
            .then((tag) => console.log(tag.dataValues))
            .catch((err) => console.log(err))
        }

        return res.status(200).json(post.dataValues)
      })
      .catch((err) => {
        console.log(err)
        return res
          .status(400)
          .json({ messages: "error add post", errors: err.toString() })
      })
  }
)

module.exports = router
