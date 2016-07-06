 // ND: Nice job here! Code looks good. Doesn't look like you actually need to use
 // html as a selector though. Works just fine without
// each of these Jquery click functions animates the transition to the corresponding div
$("document").ready(function() {

$("#aboutMeClick").click(function() {
    $("#aboutMe").css("visibility", "visible");

});

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


});
