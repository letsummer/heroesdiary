import express from "express";
import {userProfile, getEditProfile, postEditProfile, deleteAccount} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", userProfile);
userRouter.route("/edit").get(getEditProfile).post(postEditProfile);
userRouter.get("/delete", deleteAccount);

export default userRouter;