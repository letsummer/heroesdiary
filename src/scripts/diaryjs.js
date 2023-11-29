const btnDelete = document.querySelector(".btnDelete");
btnDelete.addEventListener("click", btnDeleteEvent);
function btnDeleteEvent(e){
    const isDelete = confirm("작성한 내용을 초기화 하시겠습니까?\n❗주의❗ 다시 복구할 수 없습니다.");
    if(isDelete){
        return true
    }
    else
        e.preventDefault();
        // return false;
}

const btnClose = document.querySelector(".btnClose");

btnClose.addEventListener("click", btnCloseEvent);

function btnCloseEvent(){
    const isClose = confirm("작성한 내용은 저장되지 않습니다.");
    if(isClose){
        document.location.href = "/diary";
    }
    else
        return false;
    
}
/* radio button 저장*/
document.querySelectorAll("input[type=radio]")
    .forEach(item => {
        item.addEventListener("change", () => {
            // console.log(item.value);
        });
});

/* 날짜 표기 */
const today = document.querySelector("#today");
const todayContent = today.textContent;
const prevDate = document.querySelector("#prevDate");
const postDate = document.querySelector("#postDate");

let currYear = Number(todayContent.slice(0,4));
let currMonth = Number(todayContent.slice(4,6));
let currDate = Number(todayContent.slice(6));

const newDate = new Date(currYear,currMonth-1,currDate);

let year = newDate.getFullYear();
let month = newDate.getMonth()+1;
let date = newDate.getDate();

prevDate.addEventListener("click", clickedPrevdate);
postDate.addEventListener("click", clickedPostdate);

function clickedPrevdate(){
    currDate = date - 1;
    if(currDate < 1){
        if(month == 1){
            currYear = year - 1 ;
            return document.location.href = `${currYear}1231`;
        }
        currMonth = month - 1;
        if(month==5 || month==7 || month==10 || month==12){
            currDate = 30;
        }
        else if(month==3){
            if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ){
                currDate = 29;
            }
            else
                currDate = 28;
        }
        else
            currDate = 31;
    }
    
    currMonth = String(currMonth).padStart(2,0);
    currDate = String(currDate).padStart(2,0);
    // console.log(`${year}년 ${month}월 ${date}일`);
    // console.log(`${currYear}년 ${currMonth}월 ${currDate}일`);

    document.location.href = `${currYear}${currMonth}${currDate}`;
}

function clickedPostdate(){
    currDate = date + 1;
    if(currDate > 31){ //공통
        currMonth = month + 1;
        if(currMonth > 12) {
            currYear = year + 1 ;
            return document.location.href = `${currYear}0101`;
        }
        currDate = 1;
    }
    else if(currDate > 30 && ((month == 4) || (month == 6) || (month == 9) || (month == 11))){
        currMonth = month + 1;
        currDate = 1;
    }
    else if(month == 2 && currDate >= 28){
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ){
            if(currDate > 29){
                // console.log("29일초과 && 윤년");
                currMonth = 3;
                currDate = 1;
            }
        }
        else{
            // console.log("28일이상");
            currMonth = 3;
            currDate = 1;
        }
    }
    
    currMonth = String(currMonth).padStart(2,0);
    currDate = String(currDate).padStart(2,0);
    // console.log(`${year}년 ${month}월 ${date}일`);
    // console.log(`${currYear}년 ${currMonth}월 ${currDate}일`);

    document.location.href = `${currYear}${currMonth}${currDate}`;
}
today.innerText = `${todayContent.slice(0,4)}.${todayContent.slice(4,6)}.${todayContent.slice(6)}`;

/* */

// const dateRegexSimple = /^\d{4}\d{2}\d{2}$/; //? YYYYMMDD 형식의 정규식
// const dateRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/; //? 230613 kty YYYYMMDD 각 자리에 유효한 생년월일인지 확인

// /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/

// const dateTest = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;


// console.log(dateTest.test("2019-07-32"));
// console.log(dateTest.test("2019-09-30"));
// console.log(dateTest.test("2019-02-29"));


