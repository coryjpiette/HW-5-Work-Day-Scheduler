


$(document).ready(function () {
    $("#today").text(moment().format('dddd') + ", " + moment().format('LL'));
    scheduleInput();
});

$("#confirmButton9am").click(function () {
    var availableSlot = "textarea9am";
    var apptInfo = document.getElementById('textarea9am').value;
    setAppt(availableSlot, apptInfo);
    scheduleInput();
});

$("#confirmButton10am").click(function () {
    var availableSlot = "textarea10am";
    var apptInfo = document.getElementById('textarea10am').value;
    setAppt(availableSlot, apptInfo);
    scheduleInput();
});

$("#confirmButton11am").click(function () {
    var availableSlot = "textarea11am";
    var apptInfo = document.getElementById('textarea11am').value;
    setAppt(availableSlot, apptInfo);
    scheduleInput();
});

function setAppt(time, details) {
    var newAppt = {
        time: time,
        title: details
    }


    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];

    scheduleArray = scheduleArray.filter(appointment => appointment.time !== newAppt.time);

    scheduleArray.push(newAppt);

    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));
}
function scheduleInput() {
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];

    scheduleArray.map(newAppt => {

        if (newAppt.title != 0) {
            $(newAppt.time).html(newAppt.title);
        }
    });
}



var scheduleArray = [];
var time = moment();
var timeFormat = 'hh:mma';
var startTime = moment('12:00am', timeFormat);
var nineStartTime = moment('9:00am', timeFormat);
var nineEndTime = moment('10:00am', timeFormat);
var tenStartTime = moment('10:00am', timeFormat);
var tenEndTime = moment('11:00am', timeFormat);
var elevenStartTime = moment('11:00am', timeFormat);
var elevenEndTime = moment('11:59am', timeFormat);
var twelveStartTime = moment('12:00pm', timeFormat);
var twelveEndTime = moment('12:59pm', timeFormat);
var oneStartTime = moment('1:00pm', timeFormat);
var oneEndTime = moment('1:59pm', timeFormat);
var twoStartTime = moment('2:00pm', timeFormat);
var twoEndTime = moment('2:59pm', timeFormat);
var threeStartTime = moment('3:00pm', timeFormat);
var threeEndTime = moment('3:59pm', timeFormat);
var fourStartTime = moment('4:00pm', timeFormat);
var fourEndTime = moment('4:59pm', timeFormat);
var fiveStartTime = moment('5:00pm', timeFormat);
var fiveEndTime = moment('5:59pm', timeFormat);

setInterval(function () {
    checkTime();
}, 1000);

function checkTime() {
    if (time.isBefore(nineStartTime)) {

        $('#enter9am').css('background', '#3fbd3f');
    }

    if (time.isBetween(nineStartTime, nineEndTime)) {

        $('#enter9am').css('background', '#ff6961');
    }
    if (time.isAfter(nineEndTime)) {
        $('#enter9am').css('background', '#d3d3d3');
    }
    if (time.isBefore(tenStartTime)) {

        $('#enter10am').css('background', '#3fbd3f');
    }

    if (time.isBetween(tenStartTime, tenEndTime)) {

        $('#enter10am').css('background', '#ff6961');
    }
    if (time.isAfter(tenEndTime)) {
        $('#enter10am').css('background', '#d3d3d3');

    }
    if (time.isBefore(elevenStartTime)) {

        $('#enter10am').css('background', '#3fbd3f');
    }

    if (time.isBetween(elevenStartTime, elevenEndTime)) {

        $('#enter10am').css('background', '#ff6961');
    }
    if (time.isAfter(elevenEndTime)) {
        $('#enter10am').css('background', '#d3d3d3');

    }

}
