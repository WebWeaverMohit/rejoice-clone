function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

init()

document.querySelector("#page6").addEventListener("click", function(){
    document.querySelector("#left").style.transform = "translateX(0)";
})

document.querySelector("#close-left").addEventListener("click", function(){
    document.querySelector("#left").style.transform = "translateX(-100%)";
})

document.querySelector("#page1 #nav #open").addEventListener("click", function(){
  document.querySelector("#top").style.transform = "translateY(-2%)"

  gsap.from("#top-center #part1 video",{
    scale:0,
    duration:1,
    opacity:0,
    delay:0.5
  })

  gsap.from("#top-center #part2 h1",{
    y:100,
    stagger: 0.2,
    delay:0.5,
    duration:1,
    opacity:0
  })

  gsap.from("#top-center #part2 button h4",{
    y:50,
    delay:0.5,
    duration:1,
    opacity:0
  })

  gsap.from("top-footer h2",{
    x:100,
    delay:0.5,
    duration:1,
    opacity:0
  })
})

document.querySelector("#close-top").addEventListener("click", function(){
  document.querySelector("#top").style.transform = "translateY(-100%)"
})


gsap.to("#wait #center h1",{
  display: "initial",
  duration: 1,
  stagger: 0.5
})

gsap.to("#wait",{
  opacity: 0,
  duration: 1,
  delay:1.5
})

gsap.from("#page1 #nav",{
  y:-50,
  opacity:0,
  delay:2
})

gsap.from("#page1 #text h1",{
  y:100,
  opacity:0,
  delay:2,
  stagger:0.09
})

gsap.from("#page2-nav h2",{
  y:50,
  opacity:0,
  scrollTrigger:{
    trigger: "#page2",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 50%",
    end: "top 40%"
  }
})

gsap.from("#page2 h1",{
  y:50,
  opacity:0,
  stagger: 0.5,
  scrollTrigger:{
    trigger: "#page2",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 40%",
    end: "top 30%"
  }
})

gsap.from("#page3-center h1",{
  y:50,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger: "#page3",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 45%",
    end: "top 35%"
  }
})

gsap.from("#page4-nav h4",{
  y:50,
  opacity:0,
  scrollTrigger:{
    trigger: "#page4",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 50%",
    end: "top 40%"
  }
})

gsap.from("#page5-nav h4",{
  y:50,
  opacity:0,
  scrollTrigger:{
    trigger: "#page5",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 70%",
    end: "top 60%"
  }
})

gsap.from("#page5 h1",{
  y:50,
  opacity:0,
  stagger: 0.5,
  scrollTrigger:{
    trigger: "#page5",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 50%",
    end: "top 40%"
  }
})

gsap.from("#page7-nav h2",{
  y:50,
  opacity:0,
  scrollTrigger:{
    trigger: "#page7",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 50%",
    end: "top 40%"
  }
})

gsap.from("#page7 h1",{
  y:50,
  opacity:0,
  stagger: 0.5,
  scrollTrigger:{
    trigger: "#page7",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 40%",
    end: "top 30%"
  }
})

gsap.from("#page9 #center h1",{
  y:50,
  opacity:0,
  scrollTrigger:{
    trigger: "#page9",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 40%",
    end: "top 30%"
  }
})

gsap.from("#page10-nav",{
  y:-100,
  opacity:0,
  scrollTrigger:{
    trigger: "#page10",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 50%",
    end: "top 40%"
  }
})

gsap.from("#page10-center",{
  y:-100,
  opacity:0,
  scrollTrigger:{
    trigger: "#page10",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 50%",
    end: "top 40%"
  }
})

gsap.from("#page10-text h1",{
  y: -100,
  opacity:0,
  stagger: 0.08,
  scrollTrigger:{
    trigger: "#page10",
    // markers: true,
    scroller: "#main",
    scrub: 2,
    start: "top 30%",
    end: "top 20%"
  }
})
