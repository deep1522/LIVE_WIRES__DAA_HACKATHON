import jwt from "jsonwebtoken";
import Usermodal from "../models/user.modal.js";
const attendance = async (req, res) => {
  try {
    const { teamname } = req.body;
    const user = await Usermodal.findOne({ teamname });
    if (!user) {
      res.send(404).json({ message: "Team not found" });
    }
    user.attendance = true;
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (
    username == process.env.ROOT_USER &&
    password == process.env.ROOT_PASSWORD
  ) {
    const token = jwt.sign({ status: "Root Access" }, process.env.JWT_KEY);
    res.status(200).json({ message: "login successfull", token });
  }
};

const getparticipants = async (req, res) => {
  const participants = await Usermodal.find();
  res.status(200).json({ participants });
};
export { attendance, login, getparticipants };
