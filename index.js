function makeTimer() {
    var dayOfHope = 5;
    var endTime = new Date("December"+ dayOfHope +", 2022 18:00:00 PDT");	
    
    // To set present_dates to two variables
    var present_date = new Date();
    
    // To calculate the time difference of two dates
    var Difference_In_Time = present_date.getTime() - endTime.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

    if(Difference_In_Days > 0){
        var endTime = new Date("December" + (dayOfHope + Difference_In_Days) + ", 2022 18:00:00 PDT");
    }
    
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");		

}