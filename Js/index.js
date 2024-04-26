// Sélectionner toutes les sections et les liens de navigation
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Fonction pour gérer l'événement de défilement
window.onscroll = () => {
    // Itérer sur chaque section
    sections.forEach(sec => {
        // Obtenir la position actuelle du défilement
        let top = window.scrollY;
        // Calculer la position supérieure de la section actuelle avec un décalage supplémentaire de 150px
        let offset = sec.offsetTop - 150;
        // Obtenir la hauteur de la section actuelle
        let height = sec.offsetHeight;
        // Obtenir l'ID de la section actuelle
        let id = sec.getAttribute('id');
        
        // Vérifier si la position actuelle du défilement est à l'intérieur des limites de la section actuelle
        if (top >= offset && top < offset + height) {
            // Itérer sur tous les liens de navigation pour mettre à jour leur état actif
            navLinks.forEach(link => {
                // Supprimer la classe 'active' de tous les liens de navigation
                link.classList.remove('active');
            });
            // Ajouter la classe 'active' au lien de navigation correspondant à la section actuelle
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    // Sélectionner l'en-tête
    let header = document.querySelector('header');
    // Ajouter ou supprimer la classe 'sticky' à l'en-tête en fonction de la position du défilement
    header.classList.toggle('sticky', window.scrollY > 100);
};
