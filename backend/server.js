const path = require("path")
const express = require("express")
require("colors")
require("dotenv").config()
const { errorHandler } = require("./middleware/error")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/api/users", require("./routes/user"))

// Deploy frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")))

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    )
  )
}

app.use(errorHandler)
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})