import express from "express";
import {home, join, login} from "../controllers/globalController.js";

const glolbalRouter = express.Router();

glolbalRouter.get("/", home);
glolbalRouter.get("/join", join);
glolbalRouter.get("/login", login);

export default glolbalRouter;