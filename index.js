

$("#middle_button").click(function() {
    $('html,body').animate({
        scrollTop: $("#middle").offset().top},
        'slow');
});

$("#bottom_button").click(function() {
    $('html,body').animate({
        scrollTop: $("#bottom").offset().top},
        'slow');
});

$("#top_button").click(function() {
    $('html,body').animate({
        scrollTop: $("#background").offset().top},
        'slow');
});
