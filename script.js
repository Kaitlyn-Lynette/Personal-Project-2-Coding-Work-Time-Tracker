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
  console.log(day)
  var dayRow = $("<div>");
  dayRow.attr("class", "row day");
  dayRow.text(day);
  $(".time-block").append(dayRow);
});

// Create

var calendarDate = parseInt(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(calendarDate);

