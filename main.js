
const imageNames = [
    "WhatsApp Image 2024-09-02 at 9.20.14 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.20.18 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.20.23 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.20.27 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.20.31 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.20.36 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.20.40 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.10 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.16 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.19 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.28 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.32 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.37 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.45 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.50 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.50.55 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.51.00 PM.jpeg",
    "WhatsApp Image 2024-09-02 at 9.51.07 PM.jpeg",
]
const gallery = document.getElementById('gallery');

imageNames.forEach(name => {
    const img = document.createElement('img');
    img.src = `recursos/${name}`;
    img.alt = name;
    gallery.appendChild(img);
});