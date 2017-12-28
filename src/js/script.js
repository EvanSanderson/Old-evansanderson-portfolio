$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("section.panel.green", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
        .fromTo("section.panel.bordeaux", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone });
    
    var scene = new ScrollMagic.Scene({ 
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "300%"
     })
        .setPin('#pinContainer')
        .setTween(wipeAnimation)
        .addTo(controller);
        
        var circle = $("circle#circle");
        var newTween = new TimelineMax()
                .add(TweenMax.to(circle, 10, {fill: "orange", ease: Linear.easeNone}))
                .add(TweenMax.to(circle, 10, {stroke: "green", ease: Linear.easeNone}));
                
        var scene2 = new ScrollMagic.Scene({triggerElement: "#section-3", duration: 200, tweenChanges: true})
                        .setTween(newTween)
                        .addTo(controller);
            
});



