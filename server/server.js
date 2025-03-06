import cluster from "cluster";
import express from "express";
import dotenv from "dotenv";
import os from "os";
import authRoute from "./routes/auth.routes.js";
import registerRoute from "./routes/registration.route.js";
import PictureRoute from "./routes/picture.route.js";
import AdminRoute from ".//routes/admin.routes.js"
import connectTodb from "./lib/connect.db.js";
dotenv.config();
const CPUs = os.cpus().length;
const app = express();
const PORT = process.env.PORT | 5050;
app.use(express.json());
if (cluster.isPrimary) {
  for (let i = 0; i < CPUs; i++) {
    cluster.fork();
  }
} else {
  app.use("/api/auth", authRoute);
  app.use("/api/register", registerRoute);
  app.use("/api/upload", PictureRoute);
  app.use("/api/admin", AdminRoute);
  app.listen(PORT, () => {
    connectTodb();
    console.log(
      `server up and running on ${PORT} and process is ${process.pid}`
    );
  });
}
