let point=document.querySelector(".point");


gsap.from(".box1 h1", {
  opacity: 0,
  deration: 4,

  stagger: 0.5,
});

gsap.to(".box2 h1", {
  transform: "translateX(-70%)",
  scrollTrigger: {
    trigger: ".box2 ",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    
    pin: true,
  },
});

gsap.from(" .nam", {
    x: -200,
  scrollTrigger: {
   trigger:".box3",
    
    scroll:"body",
    start: "top 0%",
    end:"top -100%",
    
  
    pin:true
    
    
  },
});
gsap.from(".point ,ul, li, a", {
  x: 1000,
  
  stagger: 0.5,
  
});

let tl=gsap.timeline();

gsap.to(".hov",{
  x:500,
})

point.addEventListener("onclick",function(){
  alert("hello");

})

