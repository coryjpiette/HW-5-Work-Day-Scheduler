
$(document).ready(function () {
    $("#today").text(moment().format('dddd') + ", " + moment().format('LL'));
    writeToSchedule();
});

$("#confirmButton9am").click(function () {
    var availableSlot = "textarea9am";
    var apptInfo = document.getElementById('textarea9am').value;
    setAppointment(availableSlot, apptInfo);
    writeToSchedule();
});

$("#confirmButton10am").click(function () {
    var availableSlot = "textarea10am";
    var apptInfo = document.getElementById('textarea10am').value;
    setAppointment(availableSlot, apptInfo);
    writeToSchedule();
});

$("#confirmButton11am").click(function () {
    var availableSlot = "textarea11am";
    var apptInfo = document.getElementById('textarea11am').value;
    etAppointment(availableSlot, apptInfo);
    writeToSchedule();
});

$("#confirmButton12pm").click(function () {
    var availableSlot = "textarea12pm";
    var apptInfo = document.getElementById('textarea12pm').value;
    etAppointment(availableSlot, apptInfo);
    swriteToSchedule();
});

$("#confirmButton1pm").click(function () {
    var availableSlot = "textarea1pm";
    var apptInfo = document.getElementById('textarea1pm').value;
    setAppointment(availableSlot, apptInfo);
    swriteToSchedule();
});

$("#confirmButton2pm").click(function () {
    var availableSlot = "textarea2pm";
    var apptInfo = document.getElementById('textarea2pm').value;
    setAppointment(availableSlot, apptInfo);
    writeToSchedule();
});

$("#confirmButton3pm").click(function () {
    var availableSlot = "textarea3pm";
    var apptInfo = document.getElementById('textarea3pm').value;
    setAppointment(availableSlot, apptInfo);
    writeToSchedule();
});

$("#confirmButton4pm").click(function () {
    var availableSlot = "textarea4pm";
    var apptInfo = document.getElementById('textarea4pm').value;
    setAppointment(availableSlot, apptInfo);
    writeToSchedule();
});

$("#confirmButton5pm").click(function () {
    var availableSlot = "textarea5pm";
    var apptInfo = document.getElementById('textarea5pm').value;
    setAppointment(availableSlot, apptInfo);
    writeToSchedule();
});


function setAppointment(time, details) {
    var newAppt = {
        time: time,
        title: details
    }


    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
  

    scheduleArray = scheduleArray.filter(appointment => appointment.time !== newAppt.time);

    scheduleArray.push(newAppt);

    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));
}
function writeToSchedule() {
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

        $('#enter11am').css('background', '#3fbd3f');
    }

    if (time.isBetween(elevenStartTime, elevenEndTime)) {

        $('#enter11am').css('background', '#ff6961');
    }
    if (time.isAfter(elevenEndTime)) {
        $('#enter11am').css('background', '#d3d3d3');

    }
    if (time.isBefore(twelveStartTime)) {

        $('#enter12pm').css('background', '#3fbd3f');
    }

    if (time.isBetween(twelveStartTime, twelveEndTime)) {

        $('#enter12pm').css('background', '#ff6961');
    }
    if (time.isAfter(twelveEndTime)) {
        $('#enter12pm').css('background', '#d3d3d3');

    }
    if (time.isBefore(oneStartTime)) {

        $('#enter1pm').css('background', '#3fbd3f');
    }

    if (time.isBetween(oneStartTime, oneEndTime)) {

        $('#enter1pm').css('background', '#ff6961');
    }
    if (time.isAfter(oneEndTime)) {
        $('#enter1pm').css('background', '#d3d3d3');

    }
    if (time.isBefore(twoStartTime)) {

        $('#enter2pm').css('background', '#3fbd3f');
    }

    if (time.isBetween(twoStartTime, twoEndTime)) {

        $('#enter2pm').css('background', '#ff6961');
    }
    if (time.isAfter(twoEndTime)) {
        $('#enter2pm').css('background', '#d3d3d3');

    }
    if (time.isBefore(threeStartTime)) {

        $('#enter3pm').css('background', '#3fbd3f');
    }

    if (time.isBetween(threeStartTime, threeEndTime)) {

        $('#enter3pm').css('background', '#ff6961');
    }
    if (time.isAfter(threeEndTime)) {
        $('#enter3pm').css('background', '#d3d3d3');

    }
    if (time.isBefore(fourStartTime)) {

        $('#enter4pm').css('background', '#3fbd3f');
    }

    if (time.isBetween(fourStartTime, fourEndTime)) {

        $('#enter4pm').css('background', '#ff6961');
    }
    if (time.isAfter(fourEndTime)) {
        $('#enter4pm').css('background', '#d3d3d3');

    }
    if (time.isBefore(fiveStartTime)) {

        $('#enter5pm').css('background', '#3fbd3f');
    }

    if (time.isBetween(fiveStartTime, fiveEndTime)) {

        $('#enter5pm').css('background', '#ff6961');
    }
    if (time.isAfter(fiveEndTime)) {
        $('#enter5pm').css('background', '#d3d3d3');

    }

    if (time.isBetween(startTime, nineStartTime)) {
        $('#enter9am').css('background', '#3fbd3f');
        $('#enter10am').css('background', '#3fbd3f');
        $('#enter11am').css('background', '#3fbd3f');
        $('#enter12pm').css('background', '#3fbd3f');
        $('#enter1pm').css('background', '#3fbd3f');
        $('#enter2pm').css('background', '#3fbd3f');
        $('#enter3pm').css('background', '#3fbd3f');
        $('#enter4pm').css('background', '#3fbd3f');
        $('#enter5pm').css('background', '#3fbd3f');
    }

}




