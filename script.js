const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Contact form demo
const form = document.getElementById('contact-form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Message sent! (demo)');
        form.reset();
    });
}
