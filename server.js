import express from "express";
import db from "./src/config/database.js";
import userRoutes from "./src/routes/user.routes.js";
import uploadRoutes from "./src/routes/upload.routes.js";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {predictor} from "./src/keras_model/model.js";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

try{
  await db.sync();
  await db.authenticate();
  console.log("Database connected successfully");
} catch (error) {
  console.error("Database connect failed: ", error);
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Skin Care App Backend" });
});

app.use('/users/', userRoutes);
// app.use('/prediction/', userRoutes);
app.use('/img/', uploadRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
