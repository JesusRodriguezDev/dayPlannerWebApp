var timetestEL = document.querySelector("#hr8-am");
var hourBlockEl = document.querySelector(".row");
var timeDisplayEl = $("#time-display");
var hourEl = hourBlockEl.dataset.hour;
var taskTextEL = hourBlockEl.children


console.log(timetestEL.dataset.ampm);
console.log(timetestEL.dataset.hour);
console.log(hourBlockEl.dataset.hour);
console.log(moment().format("HH"));
console.log(hourEl);


function displayTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(time);
}
setInterval(displayTime,1000);

    function hourTracker() {
        var currentHour = moment().hour(); 
        $(".row").each(function () {
            var blockHour = parseInt(hourEl); //parseInt($(this).attr("id").split("hour")[1]);
            console.log(hourEl);
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

hourTracker();