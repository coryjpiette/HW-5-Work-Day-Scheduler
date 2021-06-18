
$(document).ready(function () {
    $("#today").text(moment().format('dddd') + ", " + moment().format('LL'));
    scheduleInput();
});

$("#appt9am").click(function () {
    var availableSlot = "#9amFormat";
    var apptInfo = document.getElementById('timeFormat9am').value;
    setAppt(availableSlot, apptInfo);
    scheduleInput();
});
