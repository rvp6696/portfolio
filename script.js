

// Text typing Animation with Typed JS

let data = new Typed(".input", {
    strings: ["Frontend Developer", "Web Developer", "Creative learner"],
    typeSpeed: 80,
    backSpeed: 90,
    backDelay: 400,
    loop: true
})


// About me section: Button Toggle

let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

let getaboutme = (tabname) => {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// Sweetalert after sending the message in Contact form

let scriptURL = "https://script.google.com/macros/s/AKfycbxMt-xeM5wNku4lmh5IRPhqotEI9USXhzVE-WrfzcSOMtQFymRf94_unyJjbwOd_kvb/exec"

let form = document.forms["contact-formdata"]

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let postdata = {
        method: "POST",
        body: new FormData(form)
    }
    fetch(scriptURL, postdata)
    .then(response=>swal("Sent","Thank you, your message is sent", "success"))
    .then(()=>{
        window.location.reload()
    })
    .catch((error)=>{
        swal("Error","Please try again later...", "error")
    })
})

// Animation for Homepage

gsap.from(".navbar-links", {
    opacity: 0,
    y: -100,
    duration: 0.6,
    stagger: 0.3
})

gsap.from(".hero-pic", {
    opacity: 0,
    x: 500,
    duration: 1,
    rotateY: 360,
    ease: "expo"
})

gsap.from(".home-content", {
    opacity: 0,
    scale: 0,
    duration: 0.4,
    ease: "sine",
})

gsap.from(".home-sci", {
    opacity: 0,
    x: 800,
    duration: 1.2,
    ease: "sine",
})


gsap.from(".btn-group", {
    opacity: 0,
    x: -800,
    duration: 1,
    ease: "sine"
})

// Animation for About Page

gsap.from(".aboutme-pic", {
    scrollTrigger: {
        trigger: ".aboutme-container",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
        scrub: 3
    },
    x: -500,
    scale: 0,
    duration: 1,
    delay: 0.2
})

gsap.from(".about-texts", {
    scrollTrigger: {
        trigger: ".aboutme-container",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
        scrub: 3
    },
    x: 500,
    scale: 0,
    duration: 1,
    delay: 0.2,
    ease: "circ"
})

gsap.from("#skills", {
    scrollTrigger: {
        trigger: ".aboutme-container",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
        scrub: 3
    },
    y: -200,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    scale: 0,
    ease: "sine"
})

// Animation for Projects Page

gsap.from("#projects-head", {
    scrollTrigger: {
        trigger: "#myprojects",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
        scrub: 3
    },
    y: -200,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    scale: 0,
    ease: "sine"
})

let t1 = gsap.timeline()

t1.from(".project", {
    scrollTrigger: {
        trigger: "#myprojects",
        scroller: "body",
        start: "top 20%",
        end: "top 10%",
        scrub: 5
    },
    opacity: 0,
    y: 100,
    duration: 5,
    delay: 4,
    ease: "expo",
    stagger: 2
})

// Animation for Contact Page

gsap.from(".contactme-info .contactme-left", {
    scrollTrigger: {
        trigger: ".contactme-info .contactme-left",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 5
    },
    opacity: 0,
    x: -800,
    duration: 1,
    delay: 0.5,
    ease: "circ"
})


gsap.from("#contactcv-btn", {
    scrollTrigger: {
        trigger: ".contactme-container",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 5
    },
    opacity: 0,
    y: -800,
    duration: 1,
    ease: "expo"
})

gsap.from(".contactme-inputs ", {
    scrollTrigger: {
        trigger: ".contactme-container",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 5
    },
    opacity: 0,
    y: 800,
    duration: 1,
    delay: 0.5,
    ease: "expo"
})

gsap.from(".contact-icons", {
    scrollTrigger: {
        trigger: ".contactme-container",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 5
    },
    opacity: 0,
    y: 500,
    rotate: 360,
    duration: 0.8,
    ease: "circ",
})


// Sidebar for small screens:

let hideSidebar = () => {
    let sidebar = document.querySelector("#sidebar-links")
    sidebar.style.display='none'
}

let showSidebar = () => {
    let sidebar = document.querySelector("#sidebar-links")
    sidebar.style.display='flex'
}

// Pop-up for project section:

let popupmsg = () =>{
    let popup = document.getElementById("popup");
    popup.classList.toggle("active");
}

let popupmsg2 = () =>{
    let popup = document.getElementById("popup2");
    popup.classList.toggle("active");
}

let popupmsg3 = () =>{
    let popup = document.getElementById("popup3");
    popup.classList.toggle("active");
}

let popupmsg4 = () =>{
    let popup = document.getElementById("popup4");
    popup.classList.toggle("active");
}