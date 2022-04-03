var timeDisplayEl = document.querySelector("#time-display");
var hourEl = document.querySelector("hour");
var task_text = document.querySelector(".tast-text");
var calendar = document.querySelector(".container");

renderSavedTasks();

//declares variables for each the second child of each block of time which is the text area and then gives it the stored value in local memory
function renderSavedTasks(){
    var eightAm = document.getElementById("hr8-am").children[1];
    var nineAm = document.getElementById("hr9-am").children[1];
    var tenAm = document.getElementById("hr10-am").children[1];
    var elevenAm = document.getElementById("hr11-am").children[1];
    var twelvePm = document.getElementById("hr12-pm").children[1];
    var onePm = document.getElementById("hr1-pm").children[1];
    var twoPm = document.getElementById("hr2-pm").children[1];
    var threePm = document.getElementById("hr3-pm").children[1];
    var fourPm = document.getElementById("hr4-pm").children[1];
    var fivePm = document.getElementById("hr5-pm").children[1];

    eightAm.value = localStorage.getItem("hr8-am");
    nineAm.value = localStorage.getItem("hr9-am");
    tenAm.value = localStorage.getItem("hr10-am");
    elevenAm.value = localStorage.getItem("hr11-am");
    twelvePm.value = localStorage.getItem("hr12-pm");
    onePm.value = localStorage.getItem("hr1-pm");
    twoPm.value = localStorage.getItem("hr2-pm");
    threePm.value = localStorage.getItem("hr3-pm");
    fourPm.value = localStorage.getItem("hr4-pm");
    fivePm.value = localStorage.getItem("hr5-pm");
}

//function that uses moment() to determine the date and time and then assigns it to the timeDisplayEl element in the header, this is later passed onto an interval to keep constantly refreshing the time
function displayTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.textContent = time;
}

//function to compare the time in each one of the time blocks in the planner to the current time(determined using moment()), it then adds or removes the past, present and future classes to change the color of the outer part of each time slot
    function hourTracker() {
        var currentHour = moment().hour(); 
        var hourDivs = document.querySelectorAll("div[data-hour]");
        console.log(hourDivs);
        hourDivs.forEach(hour =>
         {
            var blockHour = parseInt(hour.getAttribute("data-hour")); 
            if (blockHour < currentHour) {
                hour.classList.add("past");
                hour.classList.remove("future");
                hour.classList.remove("present");
            }
            else if (blockHour === currentHour) {
                hour.classList.remove("past");
                hour.classList.add("present");
                hour.classList.remove("future");
            }
            else {
                hour.classList.remove("present");
                hour.classList.remove("past");
                hour.classList.add("future");
            }
        })
    }

    //funtion to get all the button ids and assign them to the one variable.  The function then uses a forEach loop to go through all the buttons in the variable and apply the code that allows it to save the text inside the text areas on to local storage
    function taskSaver(){
    var buttonsIds = document.querySelectorAll("button[id]");
    console.log(buttonsIds);
    buttonsIds.forEach(button =>{
        button.addEventListener("click", function(event){
        var block = button.parentNode.id;
        var task_text = button.previousElementSibling.value;
        localStorage.setItem(block, task_text);
        console.log(block);
        console.log(task_text)});
        })
    
    }

//this is the end of the code where functions are ran, as well as an interval to refresh the displayTime function every second
hourTracker();
setInterval(displayTime,1000);
taskSaver();
renderSavedTasks();


