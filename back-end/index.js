import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./routes/Route.js";
import cors from "cors";
const PORT = 9000;
const app = express();
const db = mongoose;
app.use(cors());
app.use(bodyParser.json());

await db.connect("mongodb://127.0.0.1:27017/test").catch((err) => {
  console.log(err);
});

app.use("/", route);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
