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
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      result = `${days} дней ${hours} часов <br>${minutes} минут ${seconds} секунд`;
    }

    $("#timer").html(result);

  }, 1000);
});
