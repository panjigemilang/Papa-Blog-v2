const express = require("express")
const router = express.Router()

// Model
const Post = require("../../models/Post")

router.get("/", (req, res) => {
  Post.findAll({
    limit: 2,
    raw: true,
    // offset: req.body.offset,
    order: [["createdAt", "ASC"]],
  }).then((posts) => {
    if (posts) {
      return res.status(200).json(posts)
      //   return res.status(200).json("Berhasil")
    }
  })
})

module.exports = router
