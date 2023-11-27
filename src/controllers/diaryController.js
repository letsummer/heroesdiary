import Diary from "../models/Diary.js";
import "../middlewares.js";


const handleSearch = (error, videos) =>{
    console.log("errors", error);
    console.log("videos", videos);
}


///fake db //추후삭제
// export const home = (req, res) => {
// let todays = [
//     {
//         title: "2023.09.20.",
//         content: "오늘의 야구",
//         id: "111",
//     }
// ]
// // }
// export const list = (req, res) =>{
//     const {id} = req.params;
//     const today = todays;
//     return res.render("diarylist", {today});
// }

export const list = async (req,res) => {
    const {id, date} = req.params;
    const diaries = await Diary.find({});
    try{
        console.log("hello");
        console.log(`###date: ${date}`);
        return res.render("diarylist", {diaries});
    } catch {
        return res.send("server-error");
    }
}

const axios = require("axios");


const teams = ["WO", "SK", "LG", "OB", "KT", 
                "HH", "SS", "HT", "LT", "NC"];

export const testUrl = async (date) => {
    let i;

    for(i=1;i<teams.length;i++){

        const url = `https://api-gw.sports.naver.com/schedule/games/${date}WO${teams[i]}0${date.slice(0,4)}`;
        const url2 = `https://api-gw.sports.naver.com/schedule/games/${date}${teams[i]}WO0${date.slice(0,4)}`;
        try {
            await axios.get(url);
            return url;
        } catch (error) {
            try {
                await axios.get(url2);
                return url2;
            } catch (error) {
            }
        }
    }
}

export const getEdit = async (req, res) => {
    const {userId:{_id}} = req.session;
    const {id, date} = req.params;
    // const diary = await Diary.findById('656437738bb9411d20cca79e');
    const diary = await Diary.findOne({owner:req.session.userId._id, date});

    // const diary = await Diary.findOne(owner == _id);
    
    // console.log(`###session id: ${req.session.userId._id}`);
    // console.log(`###diary.owner: ${diary.owner}`);
    // console.log(`###diary id: ${req.body.length}`);

    const url = await testUrl(date);
    console.log(`###date ${req.params.date}`);
    // console.log(`###req.params: ${req.params.date}`);
    
    if(url == undefined)
        return res.status(404).render("404");
    else{
        axios.get(url)
        .then((urlRes)=>{
            // console.log(`###url.data.result.game.gameId: ${ares.data.result.game.gameId}`);
            const isDiary = diary? "diary" : "newdiary";
            return res.render(isDiary, {id:id, date: date, diary, result:urlRes.data.result.game});
        });
    }
    
}

// export const postEdit = (req, res) => {
//     const { id } = req.params;
//     const { content } = req.body;
//     todays[0].content = content;
//     return res.redirect(`/diary/${id}`);
// }

export const postEdit = async (req, res) => {
    const {userId:{_id}} = req.session;
    const {id, date} = req.params;
    console.log(`id is ${id}`);
    const {
        body: { stadium, watch, weather, mood, content
            ,lineup
            // hours, 
            // minutes,
            
        },
        
        file,
    } = req;
    // console.dir(`###ticket: ${JSON.stringify(file.path)}`);
    console.log(`###req.body: ${JSON.stringify(req.body)}`);
    // console.log(`###req.lineup: ${JSON.stringify(lineup)}`);
    const diary = await Diary.findById(id);
    if(!diary){
        const dbDiary = await Diary.create({
            // _id: id,
            owner: _id,
            date,
            stadium:stadium,
            watch:watch,
            weather:weather,
            mood:mood,
            content:content,
            lineup:lineup,
            ticketUrl: file ? `/${file.path}` : "",
        });
        // console.log(`###created lineup: ${diary.lineup}`);
        // const dbDiary = await diary.save();
        // const searchParams = new URLSearchParams(window.location.href);
        // console.log(diaries);
        // res.render("diary", {diaries});
        // res.return("diarytitle", {id});
    }
    else{
        // const lineup = diary.lineup.splice(0);
        // diary.lineup = [];
        // console.log(`###before updated lineup: ${upLineup}`);
        await Diary.findByIdAndUpdate(date, {
            stadium:stadium,
            watch:watch,
            weather:weather,
            mood:mood,
            content:content,
            lineup:lineup,
            ticketUrl: file ? `/${file.path}` : diary.ticketUrl,
            // ticketUrl: ticket,
        });
        // console.log(`###updated lineup: ${li}`);
        console.log(`###updated lineup: ${diary}`);
        // console.log(`ticketUrl: ${ticketUrl}`);
    }
    console.log(`############ticketUrl: ${file}`);
    // console.log(`############ticketUrl: ${file.path}`);

    return res.redirect(`/diary`);
}

export const deleteDiary = (req, res) => {
    return res.send("Delete Diary");
}