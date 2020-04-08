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

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// get the hours from 9-5pm
//make a row for every hour from 9-5pm
console.log(hours);
hours.map((hour) => {
  console.log("I am an hour", hour);
  var hourRow = $("<div>");
  hourRow.attr("class", "row hour");

  hourRow.text(hour);
  $(".time-block").append(hourRow);

  var timeNow = parseInt(moment().format("h"));
  var hourNow = parseInt(hour);
  console.log(timeNow);
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future.
  if (hourNow === timeNow) {
    hourRow.addClass("present");
  } else if (hour < timeNow) {
    hourRow.addClass("past");
  } else {
    hourRow.addClass("future");
  }

  $(".time-block").attr("contenteditable", "true");
});
//   $("#click-me").on("click", function () {
//     console.log("You clicked!");
//   });

// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist -->
