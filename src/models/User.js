import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    location: {type: String},
    // diaries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Diary" }],
});

userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model('User', userSchema);
export default User;