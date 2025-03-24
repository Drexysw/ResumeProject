
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
} 
function downloadCV() {
    // Adjust the file path and filename as needed
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
function redirectToContact() {
    window.location.href = '/pages/contact.html';
}
