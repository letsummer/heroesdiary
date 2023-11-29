import express from "express";
import {userProfile, editProfile, deleteAccount} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", userProfile);
userRouter.get("/edit", editProfile);
userRouter.get("/delete", deleteAccount);

export default userRouter;