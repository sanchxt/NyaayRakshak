import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import authRoutes from "./routes/authRoutes.js";
import User from "./models/userModel.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (request, response) => {
  return response.send("Welcome");
});

app.get('/getusers', async (request, response) => {
  try {
    const users = await User.find({});

    return response.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.use(authRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
