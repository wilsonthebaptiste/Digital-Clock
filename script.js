window.addEventListener('load', calculateTime)

function calculateTime() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI','SAT',];
   var ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour :'12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime,200);
}

