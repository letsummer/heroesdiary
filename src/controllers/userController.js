import bcrypt from "bcrypt";
import User from "../models/User.js";
import Diary from "../models/Diary.js";

export const getJoin = (req, res) => res.render("join", {pageTitle: "회원가입"});
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
    pageTitle: "로그인"});

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

export const getEditProfile = async (req, res) => {
    return res.render("editProfile", {pageTitle: "프로필수정"});
};

export const postEditProfile = async (req, res) => {
    const {
        session:{
            userId: { _id },
        },
        body:{ username, oldpw, newpw, newpw2, location },
    } = req;
    const user = await User.findById(_id);
    const ok = await bcrypt.compare(oldpw, req.session.userId.password);
    if(newpw){
        if(!ok){
            return res.status(400).render("editProfile",{
                errorMessage: "현재 패스워드를 확인해주세요.",
            });
        }
        else{
            if(newpw !== newpw2){
                return res.status(400).render("editProfile",{
                    errorMessage: "패스워드가 일치하지 않습니다.",
                });
            }
            else{
                user.password = newpw;
                await user.save();
                req.session.destroy();
                return res.redirect("/");
            }

        }
    }
    const updatedUser = await User.findByIdAndUpdate(_id,{
        username: username? username : user.username,
        location,
    },
        { new: true }
    );
    req.session.user = updatedUser;
    req.session.username = updatedUser.username;
    return res.redirect(`/user`);
};

export const deleteAccount = async (req, res) =>{
    // const {userId:{_id}} = req.session;
    const id = req.session.userId._id;
    req.session.destroy();
    console.log(`###deleteAccount id: `, id);
    await Diary.deleteMany({owner:id});
    await User.deleteOne({_id:id});
    return res.redirect(`/`);
    // return res.send("delete account");
};