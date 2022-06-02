//*** Module color : gestion du code couleur du site

const color = {
    init: function () {
        //* 1. On initie : poser les écouteurs d'événéments
        
        // On cible le bouton qui gère le mode dark / ligth
        const switchButton = document.querySelector("#mode-switch");

        // On pose un écouteur d'événement & on indique qu'à l'événement "click", on lance la méthode changeColor de notre module
        switchButton.addEventListener("click", color.changeMode);

        // On cible maintenant les boutons qui gèrent les couleurs
        const colorButtons = document.querySelectorAll(".color-button");

        // Pour poser un écouteur sur chacun des 2 boutons, on procède via une boucle
        for (let button of colorButtons) {
            // A l'événement click, appel de la méthode gérant le changement des couleurs
            button.addEventListener("click", color.handleColorClick);
        }
    },

    handleColorClick: function (event) {
        //* 2a. Méthode de gestion du click pour changer la couleur

        // Avec l'event passé en paramètre & currentTarget, on récupère l'id du bouton qui a été la cible de l'événement
        const idButton = event.currentTarget.id;

        // On appelle la méthode pour changer la couleur en passant en argument l'id du bouton concerné
        color.changeColor(idButton);
    },

    changeColor: function (color) {
        // *2b. Méthode qui va mettre en place le changement de couleur

        //* Classe de <body>
        // Supression de la classe déjà placée sur la balise body
        document.body.classList.remove("first-color", "second-color");

        // Et ajout de l'id du bouton qui a subi l'événement en tant que nouvelle classe du body
        document.body.classList.add(color);

    },

    changeMode: function () {
        //* 3. Méthode pour changer le mode (dark / ligth)

        // On ajoute la classe mode-dark à body, dont dépend l'affichage des couleurs sombres
        document.querySelector("body").classList.toggle("mode-dark");
        // On ajoute ou on retire off à la classe de l'icone
        document.querySelector(".switch-icon").classList.toggle("bi-lightbulb");
        document.querySelector(".switch-icon").classList.toggle("bi-lightbulb-off");
        // On modifie la classe du "logo", celui-ci étant affiché si --on, caché si --off
        document.querySelector(".logo__image__black").classList.toggle("logo--on");
        document.querySelector(".logo__image__white").classList.toggle("logo--on");
        document.querySelector(".logo__image__black").classList.toggle("logo--off");
        document.querySelector(".logo__image__white").classList.toggle("logo--off");


    },
}