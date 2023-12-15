import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "Enter both fields" });
    }

    const loginUser = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await User.findOne({ email: loginUser.email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(
      loginUser.password,
      user.password
    );

    if (passwordMatch) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, dateOfBirth, password, role } = req.body;

    // Check if the required fields are provided
    if (!name || !email || !dateOfBirth || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Incomplete data" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      dateOfBirth,
      password,
      role,
    });

    // Save the user to the database
    await newUser.save();

    return res.json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error("Error during signup:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

export default router;
