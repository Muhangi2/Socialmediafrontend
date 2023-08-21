import UserModel from "../models/usermodel.js";
import bcrypt from "bcrypt";
//for registering
export const registeruser = async (req, res) => {
  console.log("req.body:", req.body);
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(9);
  const hashpassword = await bcrypt.hash(password, salt);

  const newuser = new UserModel({
    username,
    password: hashpassword,
    firstname,
    lastname,
  });

  try {
    //lets save to the database
    await newuser.save();
    res.status(200).json(newuser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//for loging in
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    //lets check if the the password matches
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(500).json("user name doesnt match with the password");
    } else {
      res.status(403).json("user isnot found");
    }
    //catch block of login
  } catch (error) {
    res.status(500);
  }
};
