import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter.js";
import diaryRouter from "./routers/diaryRouter.js";
import {localsMiddleware} from "./middlewares.js";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// const handleTest = (req,res)=> {return res.send("Hello!")};

// app.use("/", handleTest);

app.use(session({
    secret: "Hello!",
    resave: false,
    saveUninitialized: false,
    cookie:{
        // maxAge: 20000,
    },
    store: MongoStore.create({mongoUrl: "mongodb://127.0.0.1:27017/todaybaseball"}), 
    })
);


// app.get("/add-one", (req, res, next)=>{
//     return res.send(`${req.session.id}`);
// })

app.use(localsMiddleware);
app.use(express.static('public'));
app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/diary", diaryRouter);

app.get('*', function(req, res){
    res.render("404");
});

export default app;