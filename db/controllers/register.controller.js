import mongoose from "mongoose";
import User from "../models/user.model";

export const registerNewUser = (req, res) => {


    const { email, password } = req.body.user;

    User.findOne({ email }).then(user => { // check if email already exists in db
        if (!user) {
            const newUser = new User({ email });
            newUser.setPassword(password);
            newUser.save(function(err, userRecord){
                if (err) {
                    res.json({ success: false, message: "Something wrong with the server!" });
                } else {
                    res.status(200).json({ success: true, user: userRecord.toAuthJSON()});
                }
            });
        } else {
            res.json({ success: false, message: "Email already in use!" });
        }
    });


};