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

