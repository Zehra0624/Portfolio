document.addEventListener("DOMContentLoaded", function() {
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Hover effects for portfolio images
    const portfolioImages = document.querySelectorAll('.portfolio-img');
    portfolioImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 3. Portfolio category switcher
    document.getElementById('logos').addEventListener('click', function() {
        showCategory('logos');
    });
    document.getElementById('posters').addEventListener('click', function() {
        showCategory('posters');
    });
    document.getElementById('insta-posts').addEventListener('click', function() {
        showCategory('insta-posts');
    });

    function showCategory(category) {
        const allCategories = document.querySelectorAll('.category-content');
        allCategories.forEach(function(categoryContent) {
            categoryContent.style.display = 'none';
        });
        
        const selectedCategory = document.getElementById(category + '-content');
        selectedCategory.style.display = 'block';
    }

    // 4. Animate icons in the contact section
    const contactIcons = document.querySelectorAll('.icon-circle');
    contactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

