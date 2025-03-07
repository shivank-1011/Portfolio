let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
}


/*_______*/ 
let sections = document.querySelectorAll('section')
let navLinks= document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')

        if(top>=offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

let header=document.querySelector('header')
header.classList.toggle('sticky',window.scrollY>100);


menuIcon.classList.remove('bx-x-circle');
navbar.classList.remove('active');

}


ScrollReveal({ reset: true,
    distance:'80px',
    duration:1500,
    delay:200

 });
 ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});


 const typed =new Typed('.multiple-text',{
    strings: ['Student','Web Developer','Video Editor','Web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:700,
    loop:true
 })


// Add this to your script.js file

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.querySelector('body');
const lightIcon = document.querySelector('#light-icon');
const darkIcon = document.querySelector('#dark-icon');

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

// Toggle light/dark mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save user preference to localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});