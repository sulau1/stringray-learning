function formatDate(date) {
  var dd = date.getDate();

  var mm = date.getMonth() + 1;

  var y = date.getFullYear();

  return dd + "/" + mm + "/" + y;
}
function formatTime(time) {
  var h = time.getHours();

  var m = time.getMinutes();

  var s = time.getSeconds();

  return h + ":" + m + ":" + s;
}
var t = new Date();
var d = new Date();
console.log(
  "Current date is",
  formatDate(d),
  " and current time is",
  formatTime(t)
);
