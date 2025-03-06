import jwt from "jsonwebtoken";
export const verifyjwt = async (req, res, next) => {
  try {
    const token = req.header("token");
    const result = jwt.verify(token, process.env.JWT_KEY);
    if (!result) {
      res.status(400).json({ message: "unauthorized request" });
    }
    req.user = result;
    next();
  } catch (e) {
    res.status(500).json({ message: "unauthorized request" });
  }
};
