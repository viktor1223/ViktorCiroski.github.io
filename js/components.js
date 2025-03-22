// Function to load HTML components
function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            // If this is the header, check current page and update active state
            if (elementId === 'header') {
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                const navLinks = document.querySelectorAll('.nav-link');

                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === currentPage ||
                        (currentPage === 'index.html' && href.startsWith('index.html#')) ||
                        (href === 'index.html#about' && currentPage === 'index.html')) {
                        link.classList.add('active');
                    }
                });
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
}); 