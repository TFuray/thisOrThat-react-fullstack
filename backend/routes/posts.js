const express = require("express")
const router = express.Router()
const {
 uploadImage
} = require('../controllers/posts')

const { protect } = require('../middleware/auth')

router.route('/createPost').post(protect, uploadImage)

module.exports = router