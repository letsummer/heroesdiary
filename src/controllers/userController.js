import bcrypt from "bcrypt";
import User from "../models/User.js";

export const getJoin = (req, res) => res.render("join", {pageTitle: "Join"});
export const postJoin = async (req, res) => {
    console.log(req.body);
    const {username, email, password, password2, location} = req.body;
    if(password !== password2){
        return res.status(400).render("join",{
            errorMessage: "패스워드가 일치하지 않습니다.",
        });
    }
    const emailExists = await User.exists({email});
    if(emailExists){
        return res.status(400).render("join", {
            errorMessage: "이미 존재하는 email 입니다.",
        });
    }
    try {
        await User.create({
            username, 
            email, 
            password, 
            location,
        });
        return res.redirect("/login");
    } catch (error) {
        return res.status(400).render("join", {
            errorMessage: error._message,
        });
    }
};

export const getLogin = (req, res) => res.render("login", {
    pageTitle: "Login"});

export const postLogin = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).render("login", {
            errorMessage: "존재하지 않는 이메일입니다.",
        });
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){
        return res.status(400).render("login", {
            errorMessage: "비밀번호를 확인해주세요.",
        });
    }
    req.session.loggedIn = true;
    req.session.userId = user;
    req.session.username = user.username
    console.log(`### req.body.username: ${user.username}`);
    return res.redirect("/");
}

export const logout = (req, res) =>{
    req.session.destroy();
    return res.redirect("/");
};

export const userProfile = (req, res) => {
    return res.render("profile");
};

export const editProfile = (req, res) => {
    return res.render("editProfile");
};

export const deleteAccount = (req, res) =>{
    return res.send("delete account");
};