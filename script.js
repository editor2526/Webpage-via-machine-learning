document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    document.getElementById('formResponse').innerText = `Thank you, ${name}! Your message has been sent.`;
    this.reset();
});

function showUnderConstruction() {
    alert("Gallery is currently under construction. Please check back later!");
}
