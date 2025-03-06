import { Router } from "express";
import multer from "multer";
import { pictureupload } from "../controllers/pictureController.js";

const router = Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./pictures");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("picture"), pictureupload);

export default router;
