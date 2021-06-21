
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
}

scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];

scheduleArray = scheduleArray.filter(appointment => appointment.time !== newAppt.time);

scheduleArray.push(newAppt);

localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));

function scheduleRecord() {
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
var startTime = moment('12:00am', format);
var ninestartTime = moment('9:00am', format);
var nineEndTime = moment('10:00am', format);
var tenstartTime = moment('10:00am', format);
var tenEndTime = moment('11:00am', format);
var elevenstartTime = moment('11:00am', format);
var elevenEndTime = moment('11:59am', format);
var twelvestartTime = moment('12:00pm', format);
var twelveEndTime = moment('12:59pm', format);
var onestartTime = moment('1:00pm', format);
var oneEndTime = moment('1:59pm', format);
var twostartTime = moment('2:00pm', format);
var twoEndTime = moment('2:59pm', format);
var threestartTime = moment('3:00pm', format);
var threeEndTime = moment('3:59pm', format);
var fourstartTime = moment('4:00pm', format);
var fourstartTime = moment('4:59pm', format);
var fivestartTime = moment('5:00pm', format);
var fiveEndTime = moment('5:59pm', format);

