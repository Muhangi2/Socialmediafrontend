import UserModel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//for registering
export const registeruser = async (req, res) => {
  const salt = await bcrypt.genSalt(9);
  const hashpassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashpassword;
  const newuser = new UserModel(req.body);
  //lets destructure to check for the username already registered
  const { username } = req.body;

  try {
    const olduser = await UserModel.findOne({ username });
    if (olduser) {
      return res.status(400).json({ message: "Username already registered" });
    }

    //lets save to the database
    const user = await newuser.save();
    //generating webtoken
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.TOKEN_STRING,
      { expiresIn: "1h" }
    );

    res.status(200).json({user,token});
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
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
