$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
        .fromTo("div.panel.lilac", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("div.panel.green", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
        .fromTo("div.panel.grey", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone });
    
    var scene = new ScrollMagic.Scene({ 
        triggerElement: "#whoami",
        triggerHook: "onLeave",
        duration: "300%"
     })
        .setPin('#whoami')
        .setTween(wipeAnimation)
        .addTo(controller);
        
        var circle = $("circle#circle");
        var circleTween = new TimelineMax()
                .add(TweenMax.to(circle, 5, {strokeDashoffset: 0, ease: Linear.easeNone, repeat:-1}))
                
        var scene2 = new ScrollMagic.Scene({triggerElement: "#whoami", duration: 200, tweenChanges: true})
                        .setTween(circleTween)
                        .addTo(controller);

        var shakeleft = $("path#shakeleft");
        var shakeright = $("path#shakeright");

        var shakeTween = new TimelineMax()
                            .add(TweenMax.to(shakeleft, 3, {strokeDashoffset: 0, ease: Linear.easeNone, repeat: -1}))
                            .add(TweenMax.to(shakeright, 5, {strokeDashoffset: 0, ease: Linear.easeNone, repeat: -1}));

        var shakeScene = new ScrollMagic.Scene({triggerElement: "#section-3", duration: 200, tweenChanges:true})
                        .setTween(shakeTween)
                        .addTo(controller)
});



