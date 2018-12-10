$(document).ready(function() {
  var countDownDate = new Date("Jan 1, 2019 00:00:00").getTime();

  // Update the count down every 1 second
  var timer = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // If the count down is finished, write some text
    var result = '';

    if (distance < 0) {
      clearInterval(timer);
      result = "ВРЕМЯ ИСТЕКЛО";
    } else {
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
      var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
      if (hours.length < 2) {
        hours = '0' + hours;
      }
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
      // Display the result in the element with id="demo"
      result = `${days} дней ${hours}:${minutes}:${seconds}`;
    }

    $("#timer").html(result);

  }, 1000);
});
