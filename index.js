require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const userRoute = require("./routes/userRoute");
const uploadRoute = require("./routes/uploadRoute");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to this API" });
});

app.use("/user", userRoute);
app.use("/api", uploadRoute);

// Connect to MongoDB
const connectDB = require("./configuration/database");
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
