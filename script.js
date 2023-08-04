gsap.to(".left",2,{
    delay:.8,
    width:"50%",
    ease: Power2.easeInout,
})
gsap.to(".right",2,{
    delay:.6,
    width:"50%",
    ease: Power3.easeInout,
})
gsap.from(".nav",2,{
    delay:.8,
    opacity:0,
    ease: Expo.easeInout,

})
gsap.from(".text h1",2,{
    delay:.6,
    x:1000,
    ease: Circ.easeInout,

})
gsap.from(".text p",2,{
    delay:.72,
    x:1000,
    ease: Circ.easeInout,

})
gsap.to(".karina",2,{
    delay:1.5,
    width:"800px",
    ease: Power2.easeInout,

})
gsap.from(".bottomnav ul li",2,{
    delay:1,
    x:1000,
    ease: Circ.easeInout,


},0.08)
gsap.from(".info",2,{
    delay:1.5,
    y:100,
    ease: Circ.easeInout,
},)
gsap.from(".name",2,{
    delay:1.5,
    x:-600,
    ease: Circ.easeInout,
},)