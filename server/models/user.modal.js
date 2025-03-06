import mongoose from "mongoose";
const schema = mongoose.Schema;
const UserSchema = new schema({
  teamname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  totalteammembers: {
    type: Number,
  },
  teammates: [
    {
      name: String,
      email: String,
      phone: Number,
    },
  ],
  resgistered: {
    type: Boolean,
    default: false,
  },
  qrCode: String,
  attendance: {
    type: Boolean,
    default: false,
  },
});

const Usermodal = mongoose.model("Usermodal", UserSchema);
export default Usermodal;
