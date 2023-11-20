"use strict";

var btnClose = document.querySelector(".btnClose");
btnClose.addEventListener("click", btnCloseEvent);
function btnCloseEvent() {
  var isClose = confirm("작성한 내용은 저장되지 않습니다.");
  if (isClose) {
    document.location.href = "/diary";
  } else return false;
}
/* radio button 저장*/
document.querySelectorAll("input[type=radio]").forEach(function (item) {
  item.addEventListener("change", function () {
    console.log(item.value);
  });
});

/* 날짜 표기 */
var today = document.querySelector("#today");
var todayContent = today.textContent;
var prevDate = document.querySelector("#prevDate");
var postDate = document.querySelector("#postDate");
var currYear = Number(todayContent.slice(0, 4));
var currMonth = Number(todayContent.slice(4, 6));
var currDate = Number(todayContent.slice(6));
var newDate = new Date(currYear, currMonth - 1, currDate);
var year = newDate.getFullYear();
var month = newDate.getMonth() + 1;
var date = newDate.getDate();
prevDate.addEventListener("click", clickedPrevdate);
postDate.addEventListener("click", clickedPostdate);
function clickedPrevdate() {
  currDate = date - 1;
  if (currDate < 1) {
    if (month == 1) {
      currYear = year - 1;
      return document.location.href = "".concat(currYear, "1231");
    }
    currMonth = month - 1;
    if (month == 5 || month == 7 || month == 10 || month == 12) {
      currDate = 30;
    } else if (month == 3) {
      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        currDate = 29;
      } else currDate = 28;
    } else currDate = 31;
  }
  currMonth = String(currMonth).padStart(2, 0);
  currDate = String(currDate).padStart(2, 0);
  console.log("".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(date, "\uC77C"));
  console.log("".concat(currYear, "\uB144 ").concat(currMonth, "\uC6D4 ").concat(currDate, "\uC77C"));
  document.location.href = "".concat(currYear).concat(currMonth).concat(currDate);
}
function clickedPostdate() {
  currDate = date + 1;
  if (currDate > 31) {
    //공통
    currMonth = month + 1;
    if (currMonth > 12) {
      currYear = year + 1;
      return document.location.href = "".concat(currYear, "0101");
    }
    currDate = 1;
  } else if (currDate > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    currMonth = month + 1;
    currDate = 1;
  } else if (month == 2 && currDate >= 28) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      if (currDate > 29) {
        console.log("29일초과 && 윤년");
        currMonth = 3;
        currDate = 1;
      }
    } else {
      console.log("28일이상");
      currMonth = 3;
      currDate = 1;
    }
  }
  currMonth = String(currMonth).padStart(2, 0);
  currDate = String(currDate).padStart(2, 0);
  console.log("".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(date, "\uC77C"));
  console.log("".concat(currYear, "\uB144 ").concat(currMonth, "\uC6D4 ").concat(currDate, "\uC77C"));
  document.location.href = "".concat(currYear).concat(currMonth).concat(currDate);
}
today.innerText = "".concat(todayContent.slice(0, 4), ".").concat(todayContent.slice(4, 6), ".").concat(todayContent.slice(6));

/* */

// const dateRegexSimple = /^\d{4}\d{2}\d{2}$/; //? YYYYMMDD 형식의 정규식
// const dateRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/; //? 230613 kty YYYYMMDD 각 자리에 유효한 생년월일인지 확인

// /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/

// const dateTest = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;

// console.log(dateTest.test("2019-07-32"));
// console.log(dateTest.test("2019-09-30"));
// console.log(dateTest.test("2019-02-29"));