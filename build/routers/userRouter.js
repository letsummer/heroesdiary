"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = _express["default"].Router();
userRouter.get("/", _userController.userProfile);
userRouter.get("/edit", _userController.editProfile);
userRouter.get("/delete", _userController.deleteAccount);
var _default = exports["default"] = userRouter;