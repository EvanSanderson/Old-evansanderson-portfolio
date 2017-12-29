$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
        .fromTo("div.panel.lilac", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("div.panel.green", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone });
        // .fromTo("div.panel.grey", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone });
    
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

        var thurioWalk = {
            entry : {
                curviness: 1.25,
                autoRotate: true,
                values: [
                    {x: 100, y:-20 },
                    {x: 300, y: 10}
                ]
            },
            looping: {
                curviness: 1.25,
                autoRotate: true,
                values: [
                    {x: 510, y: 60},
                    {x: 620, y: -60},
                    {x: 500, y: -100},
                    {x:380, y:20},
                    {x:500, y:60},
                    {x:580, y:20},
                    {x:620, y:15}
                ]
            },
            leave : {
                curviness: 1.25,
                autoRotate: true,
                values: [
                    {x: 660, y: 20},
                    {x: 800, y: 130},
                    {x: $(window).width() + 300, y: -100}
                ]
            }
        };

        var thurioTween = new TimelineMax()
                            .add(TweenMax.to($("#thurio"), 1.2, {css: {bezier:thurioWalk.entry}, ease:Power1.easeInOut}))
                            .add(TweenMax.to($("#thurio"), 2, { css: { bezier: thurioWalk.looping }, ease: Power1.easeInOut }))
                            .add(TweenMax.to($("#thurio"), 1, { css: { bezier: thurioWalk.leave }, ease: Power1.easeInOut }));

        var thurioScene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
                            .setPin("#target")
                            .setTween(thurioTween)
                            .addTo(controller);
});



