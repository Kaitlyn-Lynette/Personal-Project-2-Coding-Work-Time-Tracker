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
//This is the text box for the day of the week 
  var dayRow = $("<div>");
  dayRow.attr("class", "row day");
  $(".time-block").append(dayRow);
//This is the day of the week 
  var dayOfWeek = $("<div>")
  dayOfWeek.attr("class", "week day");
  dayOfWeek.text(day)
  $(".time-block").append(dayOfWeek);

  var saveButton = $("<button>").text("save");
  saveButton.attr("class", "saveBtn hover");
  dayRow.append(saveButton)

});
//This all the row to be editable 
$(".row").attr("contenteditable", "true");


// var todayDate = moment().format("MMM Do YY")
// console.log(todayDate);
// var count = 0;

// var printDate = () => {
//   console.log(todayDate);
//   for(var i =0; i<days.length; i++){
//     console.log(moment().add(i, 'days').format('LL'))
//   }
// }

// printDate()
