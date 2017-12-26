$(document).ready(function () {

    var controller = new ScrollMagic({
        globalSceneOptions: { triggerHook: "onLeave" }
    });
    
    var tween = TweenMax.to("#section-2", 0.5, { backgroundColor: "green" });
    
    var scene = new ScrollScene({ triggerElement: "#section-2" })
        .setTween(tween)
        .addTo(controller);
    
    // var pin = new ScrollScene({ triggerElement: "#thirdPin", duration: 100 })
    //     .setPin("#pinOne")
    //     .addTo(controller);
    
    // var wider = TweenMax.to("#wider", 1, { width: "+=400px" });
    
    // var sceneTwo = new ScrollScene({ triggerElement: "#fourthPin" })
    //     .setTween(wider)
    //     .addTo(controller);
});