
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
