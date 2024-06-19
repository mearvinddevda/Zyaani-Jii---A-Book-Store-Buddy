import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
const app= express();
dotenv.config();

const PORT = process.env.PORT || 4001 ;
const URL = process.env.MongoURL;
//connect with MongoDB
try {
  mongoose.connect(URL,
    {}
  );
  console.log("Connected Successfully");

} catch (error) {
  console.log("Error",error); 
}
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) 