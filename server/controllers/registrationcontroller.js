import Usermodal from "../models/user.modal.js";
import QRcode from "qrcode";
const register = async (req, res) => {
  try {
    const { totalteammembers, teamname, teammates } = req.body;
    const data = req.body;
    const u_id = req.user.user_id;
    const user = await Usermodal.findOne({ _id: u_id });
    const teamvalidation = await Usermodal.find({ teamname });
    if (user.teammates) {
      res.status(200).json({ message: "already resgistered" });
      return;
    }
    if (teamvalidation) {
      res.status(403).json({ message: "teamname already exsists" });
      return;
    }
    const qrdata = `${(teamname, teammates)}`;
    user.qrCode = await QRcode.toDataURL(qrdata);
    user.teamname = teamname;
    user.totalteammembers = totalteammembers;
    user.teammates.push(...teammates);
    user.resgistered = true;
    await user.save();
    res
      .status(200)
      .send({ message: "registered successfully", qrCode: user.qrCode });
  } catch (e) {
    res.status(500).json({ message: "internal server error", error: e });
  }
};

export { register };
