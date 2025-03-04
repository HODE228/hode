const icons = [
    'fas fa-brush', 'fas fa-ruler-combined', 'fas fa-palette',
    'fas fa-pencil-alt', 'fas fa-magic', 'fas fa-eye-dropper',
    'fas fa-font', 'fas fa-crop-alt', 'fas fa-layer-group',
    'fas fa-paint-roller', 'fas fa-stamp', 'fas fa-spray-can',
    'fas fa-compass-drafting', 'fas fa-highlighter', 'fas fa-shapes'
];
const backgroundIcons = document.querySelector('.background-icons');
for (let i = 0; i < 50; i++) {
    const icon = document.createElement('i');
    icon.className = icons[Math.floor(Math.random() * icons.length)];
    icon.style.setProperty('--random-top', Math.random() * 100);
    icon.style.setProperty('--random-left', Math.random() * 100);
    icon.style.setProperty('--random-delay', Math.random() * 5);
    icon.style.setProperty('--random-x', Math.random() * 100 - 50);
    backgroundIcons.appendChild(icon);
}

function openOfferModal() {
    document.getElementById('offerModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeOfferModal() {
    document.getElementById('offerModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('overlay').addEventListener('click', closeOfferModal);

// Changer l'emoji en fonction des offres
const emojiWoman = document.getElementById('emoji-woman');
const hasOffers = true; // Changez cette valeur en fonction des offres disponibles

if (hasOffers) {
    emojiWoman.src = 'assets/images/woman-happy.png'; // Image d'une femme heureuse
} else {
    emojiWoman.src = 'assets/images/woman-neutral.png'; // Image d'une femme neutre
}