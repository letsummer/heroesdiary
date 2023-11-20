"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFiles = exports.middleWare = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var middleWare = exports.middleWare = function middleWare(req, res) {
  return res.render({
    mainTitle: "My Baseball"
  });
};
var uploadFiles = exports.uploadFiles = (0, _multer["default"])({
  dest: "uploads/"
});