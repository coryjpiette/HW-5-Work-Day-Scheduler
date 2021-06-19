
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

$("#confirmButton10am").click(function () {
    var availableSlot = "textarea10am";
    var apptInfo = document.getElementById('textarea10am').value;
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

function writeToSchedule() {
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];

    scheduleArray.map(newAppt => {
     
        if (newAppt.title != 0) {
            $(newAppt.time).html(newAppt.title);
        }
    });
}
