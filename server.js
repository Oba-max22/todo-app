import express from "express";
import mongoose from "mongoose";
import routes from "./routes/TodoRoute.js";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();
// Create Express server
const app = express();
// Express configuration
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
    }).catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
});
// Express configuration: routes
app.use(routes);
// Start Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});