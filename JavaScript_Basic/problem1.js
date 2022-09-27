// 1. Write a JavaScript program to display the current day and time in the following format.

console.clear();
const currentdate = new Date();

function formatAMPM(date) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const datetime = weekday[currentdate.getDay()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return `Today is: ${datetime}. Current time is: ${strTime}`;
}

console.log(formatAMPM(currentdate));
