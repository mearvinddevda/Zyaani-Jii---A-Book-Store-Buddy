import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js"
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;
const URL = process.env.MongoURL;

// Connect to MongoDB
mongoose.connect(URL, {
})
.then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error.message);
});

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
                        