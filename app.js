gsap.fromTo(".st17", { x: -400, opacity: 0.3 }, { x: 0, duration: 2, ease: "elastic", opacity: 1 })
gsap.to(".easel", { fill: "green" })
gsap.to(".test", { fill: "red" })
gsap.to(".st17", { fill: "red", duration: 0.2, repeat: 11 }, 3)
gsap.to(".circ1", { fill: "green" })
gsap.to(".circ2", { fill: "red" })
gsap.to(".circ3", { fill: "green" })
gsap.to(".circ4", { fill: "red" })
gsap.to(".circ5", { fill: "green" })
gsap.to(".circ6", { fill: "red" })
gsap.to(".circ7", { fill: "green" })
gsap.to(".circ8", { fill: "red" })
gsap.to(".circ9", { fill: "green" })
gsap.to(".circ10", { fill: "red" })
gsap.to(".circ11", { fill: "green" })
gsap.fromTo(".apple-bits", { opacity: 0 }, { opacity: 1, fill: "red" }, 2)
gsap.fromTo(".apple", { opacity: 0 }, { opacity: 1, fill: "red", ease: "bounce" }, 5)
gsap.fromTo("#apple", { opacity: 0 }, { opacity: 1, rotate: 720, duration: 2, x: 100, y: 230 }, 2.2)
gsap.to("#green-ball", { y: 200, duration: 3, ease: "bounce.in" })
gsap.fromTo("#top-ball", { y: 200 }, { y: 0, x: 300, duration: 2, scale: 2, opacity: 0.3, repeat: -1 })
gsap.to("#crayon", { y: -600, duration: 2, ease: "elastic.out" })