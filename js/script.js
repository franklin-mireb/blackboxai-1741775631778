document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('.whatsapp-link');
    const currentPageUrl = encodeURIComponent(window.location.href);
    const whatsappNumber = '+243842267252';
    const message = `I am interested in your services and I found you on this page URL: ${currentPageUrl}`;

    whatsappLinks.forEach(link => {
        link.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    });
});
