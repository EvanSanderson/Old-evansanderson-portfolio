"use strict";$(document).ready(function(){var e=new ScrollMagic.Controller,a=(new TimelineMax).fromTo("div.panel.lilac",1,{x:"-100%"},{x:"0%",ease:Linear.easeNone}).fromTo("div.panel.green",1,{x:"100%"},{x:"0%",ease:Linear.easeNone}),n=(new ScrollMagic.Scene({triggerElement:"#whoami",triggerHook:"onLeave",duration:"300%"}).setPin("#whoami").setTween(a).addTo(e),$("path#shakeleft")),o=$("path#shakeright"),t=(new TimelineMax).add(TweenMax.to(n,3,{strokeDashoffset:0,ease:Linear.easeNone,repeat:-1})).add(TweenMax.to(o,5,{strokeDashoffset:0,ease:Linear.easeNone,repeat:-1})),r=(new ScrollMagic.Scene({triggerElement:"#section-3",duration:200,tweenChanges:!0}).setTween(t).addTo(e),{entry:{curviness:1.25,autoRotate:!0,values:[{x:100,y:-50},{x:300,y:10}]},looping:{curviness:1.25,autoRotate:!0,values:[{x:510,y:60},{x:620,y:-60},{x:500,y:-100},{x:380,y:20},{x:500,y:60},{x:580,y:20},{x:620,y:15}]},leave:{curviness:1.25,autoRotate:!0,values:[{x:660,y:20},{x:800,y:130},{x:$(window).width()+300,y:-100}]}}),i=(new TimelineMax).add(TweenMax.to($("#thurio"),1.2,{css:{bezier:r.entry},ease:Power1.easeInOut})).add(TweenMax.to($("#thurio"),2,{css:{bezier:r.looping},ease:Power1.easeInOut})).add(TweenMax.to($("#thurio"),1,{css:{bezier:r.leave},ease:Power1.easeInOut})),s=(new ScrollMagic.Scene({triggerElement:"#catowner",duration:600,offset:50}).setClassToggle("#next-area","background1").setTween(i).addTo(e),(new TimelineMax).fromTo("#reachout-header",2,{opacity:.1},{opacity:1}));new ScrollMagic.Scene({triggerElement:"#reachout",duration:600}).setTween(s).setPin("#reachout").addTo(e)});