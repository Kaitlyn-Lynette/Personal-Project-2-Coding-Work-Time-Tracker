// <!-- The purpose of this planner is to track time. 

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// Go to browser and fetch the date
var todayDate = moment().format("MMM Do YYYY");
$("#currentDay").html(todayDate);
console.log(todayDate);
// WHEN I scroll down

// THEN I am presented with 6 days of the week
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days.map((day) => {

//This is the div containing the M-F  
  var dayOfWeek = $("<div>")
  dayOfWeek.attr("class", "week day");
  dayOfWeek.text(day);
  
//This is the div containing the buttons
  var buttonDiv = $("<div>")
  buttonDiv.attr("class", "buttonDiv")

  //This is the save button
  var saveBtn = $("<button>")
  saveBtn.attr("class","saveBtn")
  saveBtn.text("Save")

  //This is the div making the rows
  var dayRow = $("<div>");
  dayRow.attr("class", "row day");

  //This is the description area where time will be recorded
  var timeRecording = $("<textarea>")
  timeRecording.attr("class", "timestamp")

  //This is the event listner
    saveBtn.on("click", function() {
    var event = timeRecording.val();
    console.log(event)
    //event = what is entered into the text area and day is the day of the week that is being mapped
    localStorage.setItem(day, event);
  })

  //This is setting the event recroded to the day 
  var storedValue = localStorage.getItem(day);
  console.log(storedValue)

  if(storedValue) {
    timeRecording.val(storedValue)
  }

//Append divs and buttons
  $(".time-block").append(dayOfWeek);
  $(".time-block").append(buttonDiv);
  $(".time-block").append(dayRow);
  dayRow.append(timeRecording);
  buttonDiv.append(saveBtn);
});




