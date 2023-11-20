import "./db.js";
import "./models/Diary.js";
import app from "./index.js";
const PORT = 4000;

app.listen(PORT, ()=>console.log(`Listening!`));

