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
