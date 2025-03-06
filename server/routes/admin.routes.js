import { Router } from "express";
import {
  attendance,
  login,
  getparticipants,
} from "../controllers/admin.controller.js";
import { verifyjwt } from "../middlewares/jwtverify.js";

const router = Router();

router.post("/attendance", verifyjwt, attendance);
router.post("/login", login);
router.get("/getparticipants", verifyjwt, getparticipants);

export default router;
