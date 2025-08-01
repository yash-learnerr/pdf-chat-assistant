require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

const chatRoutes = require("./routes/chatRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded PDFs
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});