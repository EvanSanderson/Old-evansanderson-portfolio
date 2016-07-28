
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

$("#personalBackground").on("click", function() {
  $(this).html("<p>I'm a web developer/actor/playwright/arts-manager/game designer with an interest in veterans advocacy, some inherited knowledge of veterinary practice, and an enormous capacity for childlike curiousity. I also like run-on sentences. </p> <p>The quote featured at the top of my page is from Walt Whitman. It's stuck with me throughout my life as a reminder that the hodepodge of elements that make up my skills and personality aren't a weakness but a strength to be treasured.</p> <p><a href='http://www.poetryfoundation.org/poems-and-poets/poems/detail/45477' style='color: white'> Walt Whitman's Song of Myself</a></p>");
});

});
