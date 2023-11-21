"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _globalController = require("../controllers/globalController.js");
var _userController = require("../controllers/userController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rootRouter = _express["default"].Router();
rootRouter.get("/", _globalController.home);
rootRouter.route("/join").get(_userController.getJoin).post(_userController.postJoin);
rootRouter.get("/login", _userController.login);
var _default = exports["default"] = rootRouter;