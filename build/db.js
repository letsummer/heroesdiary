"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = _mongoose["default"].connection;
var handleOpen = function handleOpen() {
  return console.log("Connected to DB✅");
};
var handleError = function handleError() {
  return console.log("DB error", error);
};
db.on("error", handleError);
db.once("open", handleOpen);