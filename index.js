
// each of these Jquery click functions animates the transition to the corresponding div
$("document").ready(function() {

  var btn1 = $("#aboutMeClick");
  var aboutMe = $(".aboutMe");
  btn1.on("click", function(){
    console.log("button working");
    aboutMe.toggleClass("slide-left");

  })

  var btn2 = $("#codingClick");
  var codingBackground = $(".codingBackground");
  btn2.on("click",function(){
    console.log("button working");
    codingBackground.css("display", "inline-block");
    codingBackground.toggleClass("slide-right");
  })

$("#middle_button").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#middle").offset().top - 50},
        'slow');
});

$("#bottom_button").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#bottom").offset().top - 50},
        'slow');
});

$("#top_button").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#background").offset().top - 50},
        'slow');
});

var modal = $("#myModal");
var shakespeare = $("#shakespeareGame");
var span = $(".close")[0];

shakespeare.on("click", function() {
  modal.css("display", "block");
})

$(".close").on("click", function() {
  modal.css("display", "none");
})



});
