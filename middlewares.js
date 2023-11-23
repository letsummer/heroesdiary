import multer from "multer";

export const middleWare =  (req, res) => {
    return res.render({mainTitle: "My Baseball"});
}

export const uploadFiles = multer({ 
    dest: "uploads/" 
});