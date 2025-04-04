//Toggle Full Screen js function
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
} 

//Download CV js function
function downloadCV() {
    const filePath = '/assets/files/D.Kanev CV.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'D.Kanev CV.pdf';

    // Append the anchor to the document, trigger click, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
//Redirect to Contact Page js function
function redirectToContact() {
    window.location.href = '/pages/contact.html';
}

//Redirect to About Page js function
function redirectToAbout() {
    window.location.href = '/pages/about.html';
}

//Redirect to Journey Page js function
function redirectToJourney() {
    window.location.href = '/pages/journey.html';
}

//Snow Fall js function to create snowflakes on the  page
function snowFall() {
        const body = document.querySelector('body');
        for (let i = 0; i < 100; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '*';
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            body.appendChild(snowflake);
        }
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px'
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});

function openCertificate(path) {
    window.open(path, '_blank');
}
