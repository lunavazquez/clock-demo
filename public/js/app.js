var clockDiv = document.getElementById('clock');

var CalculateDate = function() {
    // get system date
    var date = new Date();
    // calculate hours
    var hours = date.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    // calculate minutes
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // calculate seconds
    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // insert date string into div#clock
    clockDiv.innerHTML = hours + ':' + minutes + ':' + seconds;
}
CalculateDate();

setInterval(CalculateDate, 1000);
