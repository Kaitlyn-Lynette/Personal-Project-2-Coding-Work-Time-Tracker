// <!-- Timeblocks go here -->

// <!-- GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// Go to browser and fetch the date

var todayDate = moment().format("MMM Do YYYY");
$("#currentDay").html(todayDate);
console.log(todayDate);
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

//Creates a a row for each day 
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days.map((day) => {
//This is the text box for the day of the week 
  var dayRow = $("<div>");
  dayRow.attr("class", "row day");

//This is the day of the week 
  var dayOfWeek = $("<div>")
  dayOfWeek.attr("class", "week day");
  dayOfWeek.text(day)

  // var daySpan = $("<span>");
  // daySpan.attr("class","hour col")
  // daySpan.text(day)
  // dayOfWeek.append(daySpan)

  var buttonDiv = $("<div>")
  $(".time-block").append(buttonDiv);
  

  // var saveBtn = $("<button>").text("save");
  // saveBtn.attr("class", "saveBtn");
  // saveBtn.text("Save");
 
 
  // dayRow.append(saveBtn);
  $(".time-block").append('<button class="saveBtn">Save</button>') 
  $(".time-block").append(dayRow);
  $(".time-block").append(dayOfWeek);
});
