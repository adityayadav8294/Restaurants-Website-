// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function () {
    // Menu category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Gallery filtering
    const galleryFilters = document.querySelectorAll('.gallery-filter');
    galleryFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            galleryFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(17, 17, 17, 0.029)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(17, 17, 17, 0.029)';
        }
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
});

    


// Add subtle animation to plates on page load
document.addEventListener('DOMContentLoaded', function () {
    const plates = document.querySelectorAll('.plate');
    plates.forEach((plate, index) => {
        setTimeout(() => {
            plate.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                plate.style.transform = 'translateY(0)';
            }, 300);
        }, index * 200);
    });
});




