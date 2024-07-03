// Sélectionner tous les boutons avec la classe "btn"
const buttons = document.querySelectorAll('.btn');

// Ajouter un événement de survol (mouseenter) et de sortie (mouseleave) à chaque bouton
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', animateButtonEnter);
  btn.addEventListener('mouseleave', animateButtonLeave);
});

// Fonction pour animer le bouton à l'entrée du survol
function animateButtonEnter(event) {
  const button = event.target;
  button.style.transform = 'scale(1.1)';
  button.style.backgroundColor = '#ff8c8c'; // Changer la couleur de fond
}

// Fonction pour animer le bouton à la sortie du survol
function animateButtonLeave(event) {
  const button = event.target;
  button.style.transform = 'scale(1)';
  button.style.backgroundColor = '#ff6b6b'; // Revenir à la couleur de fond d'origine
}


// Sélectionner les éléments à animer
const logoContainer = document.querySelector('.logo-container');
const navLinks = document.querySelectorAll('nav a');

// Ajouter les événements de survol
logoContainer.addEventListener('mouseenter', () => {
  logoContainer.classList.add('hover');
});

logoContainer.addEventListener('mouseleave', () => {
  logoContainer.classList.remove('hover');
});

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('hover');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('hover');
  });
});


// Partie Présentation Membre

document.addEventListener('DOMContentLoaded', function() {
  const levels = document.querySelectorAll('.level1, .level2, .level3, .level4');

  levels.forEach(level => {
    level.addEventListener('mouseover', function() {
      this.classList.add('active');
    });

    level.addEventListener('mouseout', function() {
      this.classList.remove('active');
    });
  });
});

// test page accueil :

document.addEventListener('DOMContentLoaded', function() {
  const videoContainer = document.getElementById('video-container');
  const video = document.getElementById('hero-video');
  const welcomeMessage = document.getElementById('welcome-message');

  // Fonction pour arrêter la vidéo et afficher le message de bienvenue
  function stopVideoAndShowWelcome() {
    video.pause();
    videoContainer.style.display = 'none'; // Supprimer complètement le conteneur de la vidéo
    welcomeMessage.style.opacity = 1; // Afficher le message de bienvenue
  }

  // Set a timeout to stop the video and show the welcome message after 5 seconds
  setTimeout(stopVideoAndShowWelcome, 5000); // 5000 milliseconds = 5 seconds
});
