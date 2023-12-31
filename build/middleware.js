"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFiles = exports.middleWare = exports.localsMiddleware = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var localsMiddleware = exports.localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  console.log(res.locals);
  // res.locals.siteName = "Wetube";
  next();
};
var middleWare = exports.middleWare = function middleWare(req, res) {
  return res.render({
    mainTitle: "My Baseball"
  });
};
var uploadFiles = exports.uploadFiles = (0, _multer["default"])({
  dest: "uploads/"
});