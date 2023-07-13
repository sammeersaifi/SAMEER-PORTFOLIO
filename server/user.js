import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    subject:String,
    message:String
});
export default mongoose.model('clients',userSchema)