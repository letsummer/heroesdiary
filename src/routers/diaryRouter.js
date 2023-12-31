import express from "express";
import {list, getEdit, postEdit, deleteDiary} from "../controllers/diaryController.js";
import { uploadFiles, checkUserSession } from "../middlewares.js";

const diaryRouter = express.Router();

diaryRouter.use(checkUserSession);
const dateRegex = /^(19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])$/; //? 230613 kty YYYYMMDD 각 자리에 유효한 생년월일인지 확인
diaryRouter.get("/", list);
// diaryRouter.route(`/:id((19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01]))`).get(getEdit).post(uploadFiles.single("ticket"),postEdit);
diaryRouter.route(`/:date(((19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])))`).get(getEdit).post(uploadFiles.single("ticket"),postEdit);
diaryRouter.route(`/:date(((19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])))/delete`).get(deleteDiary);
// diaryRouter.route(`/:id([\da-z\.-]+\.[a-z\.]{2,6}\/?)`).get(getEdit).post(uploadFiles.single("ticket"),postEdit);
// diaryRouter.route("/:id(\\d+)/edit")

export default diaryRouter;

