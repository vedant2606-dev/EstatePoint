import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields required !" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully !", newUser });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error in signup" });
  }
};
