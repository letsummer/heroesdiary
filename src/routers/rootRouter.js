import express from "express";
import {home} from "../controllers/globalController.js";
import {getJoin, postJoin, getLogin, postLogin} from "../controllers/userController.js";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);

export default rootRouter;