import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter.js";
import diaryRouter from "./routers/diaryRouter.js";
import userRouter from "./routers/userRouter.js";
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
        expires : new Date(Date.now() + 86400e3)
    },
    store: MongoStore.create({mongoUrl: process.env.DB_URL}), 
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
app.use("/user", userRouter);

app.get('*', function(req, res){
    res.render("404");
});

export default app;