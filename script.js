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
//This is the row for the day of the week 
  var dayRow = $("<div>");
  dayRow.attr("class", "row day");
  // $(".row").attr("contenteditable", "true");
  $(".row").append('<textarea>')

//This is the div for the of the week 
  var dayOfWeek = $("<div>")
  dayOfWeek.attr("class", "week day");
  dayOfWeek.text(day);

//This is the button div for each row
  var buttonDiv = $("<div>")
  $(".time-block").append(buttonDiv);


//This is where I append the divs and button on the button div
  $(".time-block").append('<button class="saveBtn">Save</button>') 
  $(".time-block").append(dayRow);
  $(".time-block").append(dayOfWeek);

  // saveBtn.on("click", function() {
  //   var event = timeStamp.val();
  //   localStorage.setItem(day.stringTime, event);
  // })

 
});
