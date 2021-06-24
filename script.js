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
  //Append the day of the week div
  $(".time-block").append(dayOfWeek);

//This is the div containing the buttons
  var buttonDiv = $("<div>")
  buttonDiv.attr("class", "buttonDiv")
  //Append the button div 
  $(".time-block").append(buttonDiv);

  //This is the save button
  var saveBtn = $("<button>")
  saveBtn.attr("class","saveBtn")
  saveBtn.text("Save")
  //Append the button to the button fiv 
  buttonDiv.append(saveBtn)

  //This is the div making the rows
  var dayRow = $("<div>");
  dayRow.attr("class", "row day");
   //Append row to the time-block div existing in the container
  $(".time-block").append(dayRow);

  var timeRecording = $("<textarea>")
  timeRecording.attr("class", "timestamp")
    //Appends the textArea
  dayRow.append(timeRecording)
  
    saveBtn.on("click", function() {
    var event = timeRecording.val();
    localStorage.setItem(day, event);
  })
 
});



