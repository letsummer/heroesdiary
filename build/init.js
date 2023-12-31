"use strict";

require("dotenv/config");
require("./db.js");
require("./models/Diary.js");
require("./models/User.js");
var _index = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT || 4000;
_index["default"].listen(PORT, function () {
  return console.log("Listening!");
});