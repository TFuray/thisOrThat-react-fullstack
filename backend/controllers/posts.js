const asyncHandler = require("express-async-handler")
const cloudinary = require("../middleware/cloudinary")

const User = require("../models/User")
const Post = require("../models/Post")

// @desc..... upload pic to cloudinary
// @route.... POST /api/posts
const uploadImage = asyncHandler(async (req, res) => {
  const { caption } = req.body
  try {
    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path)
    console.log(result)
    const post = await Post.create({
      image: result.secure_url,
      cloudinaryId: result.public_id,
      caption,
      likes: 0,
      user: req.user.id,
    })
    console.log("Image successfully uploaded")
    res.status(200).json(post)

  } catch (error) {
    console.log(error)
  }
})

// @

module.exports = {
  uploadImage,
}
