import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter.js";
import diaryRouter from "./routers/diaryRouter.js";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// const handleTest = (req,res)=> {return res.send("Hello!")};

// app.use("/", handleTest);
app.use(express.static('public'));
app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/diary", diaryRouter);

app.get('*', function(req, res){
    res.render("404");
});

export default app;