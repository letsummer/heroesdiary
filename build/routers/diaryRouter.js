"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _diaryController = require("../controllers/diaryController.js");
var _middlewares = require("../middlewares.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var diaryRouter = _express["default"].Router();
diaryRouter.use(_middlewares.checkUserSession);
var dateRegex = /^(19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])$/; //? 230613 kty YYYYMMDD 각 자리에 유효한 생년월일인지 확인
diaryRouter.get("/", _diaryController.list);
// diaryRouter.route(`/:id((19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01]))`).get(getEdit).post(uploadFiles.single("ticket"),postEdit);
diaryRouter.route("/:date(((19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])))").get(_diaryController.getEdit).post(_middlewares.uploadFiles.single("ticket"), _diaryController.postEdit);
// diaryRouter.route(`/:id([\da-z\.-]+\.[a-z\.]{2,6}\/?)`).get(getEdit).post(uploadFiles.single("ticket"),postEdit);
// diaryRouter.route("/:id(\\d+)/edit")
var _default = exports["default"] = diaryRouter;