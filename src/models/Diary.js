import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
    // _id: {type: String, default:"00000000"},
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    date: {type: String, default: ""},
    stadium: {type: String, default: "stadium"},
    watch: {type: String, default: "watch"},
    weather: {type: String, default: "weather"},
    mood: {type: String, default: "mood"},
    lineup: {type: Array},
    content: {type: String, default: "content"},
    ticketUrl: {type: String, default: "ticket"},
});

const Diary = mongoose.model("Diary", diarySchema);
export default Diary;