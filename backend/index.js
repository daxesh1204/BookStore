//For CommonJS importing statement
// const express = require("express");
// const dotenv = require("dotenv");

// For ES6+ importing statement
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


dotenv.config();
const port = process.env.PORT || 3001;
const URI=process.env.MONGODB_URI;
// app.get("/", (req, res) => {
//   res.send("MERN stack developer soni");
// });


// CONNECT TO THE MONGODB
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ",error);
}


//DEFINING ROUTES
app.use("/book",bookRoute);
app.use("/users",userRoute);




// CREATE THE SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
