// Function to load HTML content from a file
// function loadComponent(componentUrl, elementId, callback) {
//     fetch(componentUrl)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//             if (callback) callback();
//         })
//         .catch(error => console.error('Error loading component:', error));
// }

// Load components when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     // Load header
//     loadComponent('components/header.html', 'header');

//     // Load navbar and highlight active page
//     loadComponent('components/navbar.html', 'navbar', () => {
//         const currentPage = window.location.pathname.split('/').pop() || 'index.html';
//         const navLinks = document.querySelectorAll('.nav-link');
//         navLinks.forEach(link => {
//             if (link.getAttribute('href') === currentPage) {
//                 link.classList.add('active');
//             }
//         });
//     });

//     // Load footer
//     loadComponent('components/footer.html', 'footer');

//     // Form submission handling (Formspree)
//     const form = document.getElementById('contact-form');
//     if (form) {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault();
//             const name = document.getElementById('name').value;
//             fetch(this.action, {
//                 method: 'POST',
//                 body: new FormData(this),
//                 headers: { 'Accept': 'application/json' }
//             }).then(response => {
//                 if (response.ok) {
//                     alert(`Thank you, ${name}! Your message has been sent.`);
//                     this.reset();
//                 } else {
//                     alert('Oops! Something went wrong.');
//                 }
//             });
//         });
//     }

//     // Email obfuscation
//     const emailLink = document.getElementById('email-link');
//     if (emailLink) {
//         //emailLink.innerHTML = '<a href="mailto:hlingkv@gmail.com">hlingkv@gmail.com</a>';
//         emailLink.innerHTML = '<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#108;&#105;&#110;&#103;&#107;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#104;&#108;&#105;&#110;&#103;&#107;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>';
//     }

// });