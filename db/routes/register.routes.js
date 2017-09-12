import express from "express";
import { registerNewUser } from "../controllers/register.controller";

const registerRouter = express.Router();

registerRouter.route("/").post(registerNewUser);


export default registerRouter;