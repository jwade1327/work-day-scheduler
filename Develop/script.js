$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var time = moment().format("dddd, MMMM Do, hh:mm a");
        console.log("time: ", time);
    
        $("#currentDay").append(time);
    });

    function updateHour() { 

        var hourNow = moment().hour();

        $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < hourNow) {
          $(this).addClass("past");
        } 
        else if (blockHour === hourNow) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
    
    updateHour();
       
    $("#currentDay").text(moment().format("dddd, MMMM Do, hh:mm a"));

    $("#hour-9 .info").val(localStorage.getItem("hour-9"));
    $("#hour-10 .info").val(localStorage.getItem("hour-10"));
    $("#hour-11 .info").val(localStorage.getItem("hour-11"));
    $("#hour-12 .info").val(localStorage.getItem("hour-12"));
    $("#hour-13 .info").val(localStorage.getItem("hour-13"));
    $("#hour-14 .info").val(localStorage.getItem("hour-14"));
    $("#hour-15 .info").val(localStorage.getItem("hour-15"));
    $("#hour-16 .info").val(localStorage.getItem("hour-16"));
    $("#hour-17 .info").val(localStorage.getItem("hour-17"));

});