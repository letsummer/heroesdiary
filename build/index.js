"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _rootRouter = _interopRequireDefault(require("./routers/rootRouter.js"));
var _diaryRouter = _interopRequireDefault(require("./routers/diaryRouter.js"));
var _middlewares = require("./middlewares.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: true
}));

// const handleTest = (req,res)=> {return res.send("Hello!")};

// app.use("/", handleTest);

app.use((0, _expressSession["default"])({
  secret: "Hello!",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date(Date.now() + 86400e3)
  },
  store: _connectMongo["default"].create({
    mongoUrl: process.env.DB_URL
  })
}));

// app.get("/add-one", (req, res, next)=>{
//     return res.send(`${req.session.id}`);
// })

app.use(_middlewares.localsMiddleware);
app.use(_express["default"]["static"]('public'));
app.use("/uploads", _express["default"]["static"]("uploads"));
app.use("/", _rootRouter["default"]);
app.use("/diary", _diaryRouter["default"]);
app.get('*', function (req, res) {
  res.render("404");
});
var _default = exports["default"] = app;