"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var diarySchema = new _mongoose["default"].Schema({
  _id: {
    type: String,
    "default": "00000000"
  },
  date: {
    type: String,
    "default": ""
  },
  stadium: {
    type: String,
    "default": "stadium"
  },
  watch: {
    type: String,
    "default": "watch"
  },
  weather: {
    type: String,
    "default": "weather"
  },
  mood: {
    type: String,
    "default": "mood"
  },
  lineup: {
    type: Array
  },
  content: {
    type: String,
    "default": "content"
  },
  ticketUrl: {
    type: String,
    "default": "ticket"
  }
}, {
  _id: false
});
var Diary = _mongoose["default"].model("Diary", diarySchema);
var _default = exports["default"] = Diary;