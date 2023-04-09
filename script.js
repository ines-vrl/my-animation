// Je sélectionne tous les cercles avec la classe .cercle et les stocke dans une variable
const cercles = document.querySelectorAll(".cercle")

// J'écoute chaque événement
cercles.forEach(cercle => {
  cercle.addEventListener("click", () => {
    // J'ajoute la classe animation qui va changer le style de mes cercles
    cercle.classList.add("animation")
    
    // Je remplace leur contenu par un message
    cercle.textContent = "Bonsoir !"
  })
})

// Je créer une fonction pour supprimer la classe animation de tous les cercles ainsi que leur styles
function stopAnim() {
  cercles.forEach(cercle => {
    cercle.classList.remove("animation")
    cercle.textContent = ""
    cercle.style.display =""
  })
}

// J'ajoute un événement mouseleave au conteneur et j'appelle ma fonction pour arrêter l'animation des que le curseur de la souris quitte le conteneur
const conteneur = document.getElementById("conteneur")
conteneur.addEventListener("mouseleave", stopAnim)