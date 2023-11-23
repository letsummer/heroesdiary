import multer from "multer";

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