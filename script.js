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
  var hourRow = $("<div>");
  hourRow.attr("class", "row hour");

  hourRow.text(hour);
  $(".time-block").append(hourRow);

  var timeNow = parseInt(moment().format("h"));
  var hourNow = parseInt(hour);
  console.log(timeNow);

  // WHEN I view the timeblocks for that day. // THEN each timeblock is color coded to indicate whether it is in the past, present, or future.
  if (hourNow === timeNow) {
    hourRow.addClass("present");
  } else if (hour < timeNow) {
    hourRow.addClass("past");
  } else {
    hourRow.addClass("future");
  }
  // THEN I can enter an event
  $(".time-block").attr("contenteditable", "true");

  var eventDescription = $("<text>");
  eventDescription.attr("class", "description");

  // Make the Save Button
  var saveButton = $("<button>").text("save");
  saveButton.attr("class", "saveBtn hover");
  hourRow.append(saveButton);

  // WHEN I click the save button for that timeblock

  saveButton.on("click", function () {
    var event = eventDescription.val();
    localStorage.setItem(event);
  });

  // THEN the text for that event is saved in local storage
  var storedValue = localStorage.getItem(hours);

  // WHEN I refresh the page
  // THEN the saved events persist -->
  if (storedValue) {
    hourDescription.val(storedValue);
  }
});
