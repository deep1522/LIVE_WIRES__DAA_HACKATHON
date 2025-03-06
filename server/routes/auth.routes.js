import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  changepassword,
  login,
  signup,
} from "../controllers/authcontroller.js";
import { verifyjwt } from "../middlewares/jwtverify.js";
const router = Router();

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("phone")
      .isLength({ min: 10, max: 10 })
      .isNumeric()
      .withMessage("Enter Valid Phone Number"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  signup
);

router.post("/login", login);
router.post("/changepassword", verifyjwt, changepassword);

export default router;
