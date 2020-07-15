$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".info").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });

    function currentTime() {
        var hourNow = moment().hours();
    
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("-")[1]);

        if (timeBlock < hourNow) {
            $(this).addClass("past");
        } else if (timeBlock === hourNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            } 
    });
}

currentTime();

var interval = setInterval(currentTime, 10000);

$("#currentTime").text(moment().format("dddd, MMM Do"));

$("#hour-9.info").val(localStorage.getItem("hour-9"));
$("#hour-10.info").val(localStorage.getItem("hour-10"));
$("#hour-11.info").val(localStorage.getItem("hour-11"));
$("#hour-12.info").val(localStorage.getItem("hour-12"));
$("#hour-13.info").val(localStorage.getItem("hour-13"));
$("#hour-14.info").val(localStorage.getItem("hour-14"));
$("#hour-15.info").val(localStorage.getItem("hour-15"));
$("#hour-16.info").val(localStorage.getItem("hour-16"));
$("#hour-17.info").val(localStorage.getItem("hour-17"));

});