// Gallery scroll
function scrollGallery(direction) {
    const container = document.getElementById("galleryScroll");
    const cardWidth = 330; // width + gap
    container.scrollBy({
        left: direction * cardWidth,
        behavior: "smooth"
    });
}

// Auto scroll gallery
setInterval(() => {
    const container = document.getElementById("galleryScroll");
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        scrollGallery(1);
    }
}, 3000);

// Scroll animations for sections
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});
