"use strict";

var currentDate = document.querySelector(".current-date");
var daysTag = document.querySelector(".days");
var prevNextIcon = document.querySelectorAll(".icons span");
var date = new Date();
var currYear = date.getFullYear();
var currMonth = date.getMonth();
var currDate = date.getDate();
var months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
var renderCalendar = function renderCalendar() {
  var firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  var lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  var lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  var lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  var liTag = "";
  var clickedDate = "";
  for (var i = firstDayofMonth; i > 0; i--) {
    liTag += "<li class=\"inactive\">".concat(lastDateofLastMonth - i + 1, "</li>");
    console.log("### 1: litag, ".concat(lastDateofLastMonth - i + 1));
  }
  for (var _i = 1; _i <= lastDateofMonth; _i++) {
    var isToday = _i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
    clickedDate = String(currYear) + String(currMonth + 1).padStart(2, 0) + String(_i).padStart(2, 0);
    liTag += "<li class=\"".concat(isToday, "\"><a href=\"/diary/").concat(clickedDate, "\">").concat(_i, "</li>");
    // console.log(clickedDate);
  }

  for (var _i2 = lastDayofMonth; _i2 < 6; _i2++) {
    // liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = "".concat(currYear, "\uB144 ").concat(months[currMonth]);
  daysTag.innerHTML = liTag;
};
renderCalendar();
prevNextIcon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});