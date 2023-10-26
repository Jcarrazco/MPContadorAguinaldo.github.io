/*var FrameCollection = ["https://giphy.com/embed/2uwZ4xi75JhxZYeyQB", 
                       "https://giphy.com/embed/6D4HjBgVUazFPOIASb", 
                       "https://giphy.com/embed/8TT8VjZTZGWQw", 
                       "https://giphy.com/embed/16hOFSI1ulb7a", 
                       "https://giphy.com/embed/BTSXfb3oxC0g0", 
                       "https://giphy.com/embed/PWfHC8ogZpWcE", 
                       "https://giphy.com/embed/hCiQVo1dzVwPu", 
                       "https://giphy.com/embed/u5eXlkXWkrITm", 
                       "https://giphy.com/embed/ZXKZWB13D6gFO",
                       "https://giphy.com/embed/D4mFxzEEGguAM"];

function setFrame(){
    document.getElementById('WaitFrame').src = FrameCollection[Math.floor(Math.random() * 10)];
}*/

function makeTimer() {
    var dayOfHope = 15;
    var year = new Date().getFullYear();
    var endTime = new Date("December"+ dayOfHope +", " + year + " 18:00:00 PDT");	
    
    // To set present_dates to two variables
    var present_date = new Date();
    
    // To calculate the time difference of two dates
    var Difference_In_Time = present_date.getTime() - endTime.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

    if(Difference_In_Days > 0){
        var endTime = new Date("December" + (dayOfHope + Difference_In_Days) + ", " + year + " 18:00:00 PDT");
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
