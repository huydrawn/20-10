var percent = 0
var countDown = 5

var timer = setInterval(() => {
  $(".bar").css("width", percent+"%")
  percent += 1
  if (percent % 20 == 0) {
    countDown --
    $(".countdown").text(countDown)
  }
  if (percent > 100) {
    clearInterval(timer)
    $(".container").addClass("complete")
    $(".loading").css("display", "none")
    $(".countdown").css("display", "none")
  }
}, 50)

