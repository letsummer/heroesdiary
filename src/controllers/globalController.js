// import "../scripts/fetch.js";
const axios = require("axios");

const teams = ["WO", "SK", "LG", "OB", "KT", 
                "HH", "SS", "HT", "LT", "NC"];

export const testUrl = async (id) => {
    let i;

    for(i=1;i<teams.length;i++){

        const url = `https://api-gw.sports.naver.com/schedule/games/${id}WO${teams[i]}0${id.slice(0,4)}`;
        const url2 = `https://api-gw.sports.naver.com/schedule/games/${id}${teams[i]}WO0${id.slice(0,4)}`;
        const url3 = `https://api-gw.sports.naver.com/schedule/games/${id}${teams[i]}WO1${id.slice(0,4)}`;
        const url4 = `https://api-gw.sports.naver.com/schedule/games/${id}${teams[i]}WO2${id.slice(0,4)}`;
        try {
            await axios.get(url);
            return url;
        } catch (error) {
            try {
                await axios.get(url2);
                return url2;
            } catch (error) {
                try {
                    await axios.get(url3);
                    return url3;
                } catch (error) {
                    
                }
            }
        }
    }
}

export const home = async (req, res) => {
    const name = "I'm home!";

    const id="20230909";

    const result = await testUrl(id);
    console.log(`result: ${result}`);
    return res.render("home", {pageTitle: "Home", name});
}

export const join = (req, res) => res.render("join", {pageTitle: "Join"});

export const login = (req, res) => res.render("login", {pageTitle: "Login"});