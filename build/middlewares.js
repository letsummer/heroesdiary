"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFiles = exports.localsMiddleware = exports.checkUserSession = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var checkUserSession = exports.checkUserSession = function checkUserSession(req, res, next) {
  if (req.session.loggedIn) next();else {
    // console.log(`plz login!`);
    // next();
    res.redirect("/login");
  }
};
var localsMiddleware = exports.localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUsername = req.session.username;
  res.locals.siteName = "Today's Baseball";
  console.log(res.locals);
  // res.locals.siteName = "Wetube";
  next();
};

// export const middleWare =  (req, res) => {
//     return res.render({mainTitle: "My Baseball"});
// }

var uploadFiles = exports.uploadFiles = (0, _multer["default"])({
  dest: "uploads/"
});