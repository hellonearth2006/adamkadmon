// 4chan-style image expansion functionality
let imageExpanded = false;
let overlay = null;

function toggleImageSize() {
    const image = document.getElementById('post-image');
    
    if (!imageExpanded) {
        // Expand image
        expandImage(image);
    } else {
        // Collapse image
        collapseImage(image);
    }
}

function expandImage(image) {
    // Create overlay
    overlay = document.createElement('div');
    overlay.className = 'image-overlay active';
    overlay.onclick = function() {
        collapseImage(image);
    };
    document.body.appendChild(overlay);
    
    // Expand image
    image.classList.remove('thumbnail');
    image.classList.add('expanded');
    imageExpanded = true;
    
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
}

function collapseImage(image) {
    // Remove overlay
    if (overlay) {
        document.body.removeChild(overlay);
        overlay = null;
    }
    
    // Collapse image
    image.classList.remove('expanded');
    image.classList.add('thumbnail');
    imageExpanded = false;
    
    // Restore scrolling
    document.body.style.overflow = 'auto';
}

// Close expanded image with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && imageExpanded) {
        const image = document.getElementById('post-image');
        collapseImage(image);
    }
});

// Prevent image drag
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('post-image');
    image.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});