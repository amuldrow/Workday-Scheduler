var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// Save Button 
$(document). ready(function () {
    $(".saveBtn").on("click", function () {
        var text =$(this).siblings(".description").val();
        var time=$(this).parent().attr("id");

    // save text
    localStorage.setItem(time, text);

})

// Time block color coded
function timeBlockColor() {
    var hour = moment().hours();
    
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
});
function timetrack() {
    var Timenow = moment().hour();

    //time block 

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < Timenow) {
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
        }
        else if (blockTime === Timenow) {
            $(this).removeClass("future")
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

timetrack();


// for (var i = 8; i < 18; i++) {
//     if (i < currenthour) {
//         document.getElementById(i.toString()).classList.add('past');
//     } else if (i === currenthour ) {
//        document.getElementById(i.toString()).classList.add('present');
//     } else (i> currenthour); {
//         document.getElementById(i.toString()).classList.add('future');
//     }
// }
// });