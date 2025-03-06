import { Router } from "express";
import { register } from "../controllers/registrationcontroller.js";
import { verifyjwt } from "../middlewares/jwtverify.js";
const router = Router();
router.post("/", verifyjwt, register);
export default router;
