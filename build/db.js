"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// mongoose.connect("mongodb://127.0.0.1:27017/todaybaseball", {
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