import express from "express";
import {home} from "../controllers/globalController.js";
import {getJoin, postJoin, login} from "../controllers/userController.js";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);

export default rootRouter;