const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDate = date.getDate();

const months = ["1월", "2월", "3월", "4월", "5월", "6월", 
                "7월", "8월", "9월", "10월", "11월", "12월"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";
    let clickedDate = "";

    for (let i = firstDayofMonth ; i > 0 ; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        console.log(`### 1: litag, ${lastDateofLastMonth - i + 1}`);
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
            i === date.getDate() && 
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear() 
            ? "active" : "";
        clickedDate = String(currYear) + String(currMonth+1).padStart(2, 0) + String(i).padStart(2, 0);
        liTag += `<li class="${isToday}"><a href="/diary/${clickedDate}">${i}</li>`;
        // console.log(clickedDate);
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        // liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    
    currentDate.innerText = `${currYear}년 ${months[currMonth]}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
        currMonth = icon.id === "prev"? currMonth-1 : currMonth+1;
        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else{
            date = new Date();
        }
        renderCalendar();
    })
});