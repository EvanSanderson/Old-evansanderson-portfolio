
// each of these Jquery click functions animates the transition to the corresponding div
$("#middle_button").click(function() {
    $('html,body').animate({
        scrollTop: $("#middle").offset().top - 50},
        'slow');
});

$("#bottom_button").click(function() {
    $('html,body').animate({
        scrollTop: $("#bottom").offset().top - 50},
        'slow');
});

$("#top_button").click(function() {
    $('html,body').animate({
        scrollTop: $("#background").offset().top - 50},
        'slow');
});
