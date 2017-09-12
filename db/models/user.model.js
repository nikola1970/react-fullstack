import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import jwt from "jsonwebtoken";


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true }
}, { timestamps: true });


UserSchema.methods.setPassword = function setPassword(password){
    this.password = bcrypt.hashSync(password);
};

UserSchema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        email: this.email
    }, process.env.JWT_SECRET);
};

UserSchema.methods.toAuthJSON = function toAuthJSON(){
    return {
        email: this.email,
        token: this.generateJWT()
    }
};



export default mongoose.model("User", UserSchema);