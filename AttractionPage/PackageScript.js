document.querySelectorAll('.thumb').forEach(dot => {
    dot.addEventListener('mouseover', function() {
        // 1. Find the main image in this specific card
        const mainImg = this.closest('.package-gallery').querySelector('.main-img');
        // 2. Get the image URL hidden in the dot's background-image
        const newImg = this.style.backgroundImage;
        // 3. Update the main image
        mainImg.style.backgroundImage = newImg;
        
        // Optional: Highlight the active dot
        this.parentElement.querySelectorAll('.thumb').forEach(d => d.style.backgroundColor = '#555');
        this.style.backgroundColor = '#ffb400';
    });
});