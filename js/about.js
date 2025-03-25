// Skill bar animation
document.addEventListener('DOMContentLoaded', function() {
    // Create Intersection Observer for all animated elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Handle skill bars
                if (entry.target.classList.contains('skills')) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        bar.style.width = progress + '%';
                    });
                }
                
                // Handle section titles
                const title = entry.target.querySelector('.section-title');
                if (title) {
                    title.classList.add('animate');
                }
                
                // Handle project cards
                const cards = entry.target.querySelectorAll('.project-card');
                if (cards.length) {
                    cards.forEach(card => card.classList.add('animate'));
                }
                
                // Handle skill names and percentages
                const skillElements = entry.target.querySelectorAll('.skill-name, .skill-percentage');
                if (skillElements.length) {
                    skillElements.forEach(element => element.classList.add('animate'));
                }

                // Handle about text animation
                if (entry.target.classList.contains('about-me')) {
                    const aboutText = entry.target.querySelector('.about-text');
                    const aboutImage = entry.target.querySelector('.about-image');
                    if (aboutText) aboutText.classList.add('animate');
                    if (aboutImage) aboutImage.classList.add('animate');
                }
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    // Observe all sections that need animations
    const sections = document.querySelectorAll('.skills, .projects, .about-me');
    sections.forEach(section => observer.observe(section));
}); 