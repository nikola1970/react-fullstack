import mongoose from "mongoose";
import User from "../models/user.model";

export const LoginController = (req, res) => {

    const { email, password } = req.body.credentials;

    User.findOne({ email }).then(user => {
        if (!user) {
            res.json({ success: false, message: "User associated with this mail does not exists" });
        } else if (user) {
            if (!user.isValidPassword(password)) {
                res.json({ success: false, message: "Wrong password" });
            } else {
                res.status(200).json({ success: true, user: user.toAuthJSON() })
            }
        }
    });

};