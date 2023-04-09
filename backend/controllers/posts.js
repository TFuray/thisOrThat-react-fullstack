const asyncHanlder = require("express-async-handler")
const cloudinary = require("../middleware/cloudinary")

const User = require("../models/User")
const Post = require("../models/Post")

// @desc..... upload pic to cloudinary
// @route.... POST /api/posts
const uploadImage = asyncHanlder(async (req, res) => {
  const { caption } = req.body
  try {
    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path)

    const post = await Post.create({
      image: result.secure_url,
      cloudinaryId: result.puplic_id,
      caption,
      likes: 0,
      user: req.user.id,
    })
    console.log("Image succesfully uploaded")
    res.status(200).json(post)

  } catch (error) {
    console.log(error)
  }
})

// @

module.exports = {
  uploadImage,
}
