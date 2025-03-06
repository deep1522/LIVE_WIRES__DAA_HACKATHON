import Usermodal from "../models/user.modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const signup = async (req, res) => {
  const { email, password, phone } = req.body;
  try {
    const user = await Usermodal.findOne({ email });
    if (user) {
      res.status(403).json({ message: "Email Already Exsists" });
      return;
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Usermodal({
      email,
      password: hash,
      phone,
    });
    const result = await newUser.save();
    const token = jwt.sign({ user_id: result._id }, process.env.JWT_KEY);
    res.status(200).json({ message: "Signup Successfull", token });
  } catch (e) {
    res.status(500).json({ error: e, message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usermodal.findOne({ email });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign({ user_id: user._id }, process.env.JWT_KEY);
        res.status(200).json({ message: "login succesfull", token });
      } else {
        res.status(404).json({ message: "invalid credentials" });
      }
    } else {
      res.status(404).json({ message: "invalid credentials" });
    }
  } catch (e) {
    res.status(500).json({ message: "internal server error", error: e });
  }
};
const changepassword = async (req, res) => {
  const { oldpassword, newpassword } = req.body;
  try {
    const u_id = req.user.user_id;
    const user = await Usermodal.findOne({ _id: u_id });
    const result = await bcrypt.compare(oldpassword, user.password);
    if (!result) {
      res.status(404).json({ message: "oldpassword does not match" });
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(newpassword, salt);
    user.password = hash;
    user.save();
  } catch (e) {
    res.status(500).json({ message: "internal server error", error: e });
  }
};

export { signup, login, changepassword };
