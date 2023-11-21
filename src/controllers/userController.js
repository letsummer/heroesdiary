import User from "../models/User.js";

export const getJoin = (req, res) => res.render("join", {pageTitle: "Join"});
export const postJoin = async (req, res) => {
    console.log(req.body);
    const {name, username, email, password, location} = req.body;
    await User.create({
        name, 
        username, 
        email, 
        password, 
        location,
    });
    return res.redirect("/login");
};

export const login = (req, res) => res.render("login", {pageTitle: "Login"});