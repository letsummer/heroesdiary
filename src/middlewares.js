import multer from "multer";

export const checkUserSession= (req, res, next) => {
    if(req.session.loggedIn)
        next();
    else {
        // console.log(`plz login!`);
        // next();
        res.redirect("/login");
    }
}

export const localsMiddleware = (req, res, next)=>{
    
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUsername = req.session.username;
    console.log(res.locals);
    // res.locals.siteName = "Wetube";
    next();
};

// export const middleWare =  (req, res) => {
//     return res.render({mainTitle: "My Baseball"});
// }

export const uploadFiles = multer({ 
    dest: "uploads/" 
});