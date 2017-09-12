import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Promise from "bluebird";
import dotenv from "dotenv";

import registerRouter from "./db/routes/register.routes";
import AuthRouter from "./db/routes/auth.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });

app.use("/api/register", registerRouter);
app.use("/api/auth", AuthRouter);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => console.log("server is running"));