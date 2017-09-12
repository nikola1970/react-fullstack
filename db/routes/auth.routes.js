import express from "express";
import { LoginController } from "../controllers/auth.controller";

const AuthRouter = express.Router();

AuthRouter.route("/").post(LoginController);


export default AuthRouter;