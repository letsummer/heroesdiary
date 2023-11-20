"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _globalController = require("../controllers/globalController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var glolbalRouter = _express["default"].Router();
glolbalRouter.get("/", _globalController.home);
glolbalRouter.get("/join", _globalController.join);
glolbalRouter.get("/login", _globalController.login);
var _default = exports["default"] = glolbalRouter;