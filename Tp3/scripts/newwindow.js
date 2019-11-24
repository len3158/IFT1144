$(document).ready(  

    function () {    

       // Ajoutez du code ici pour associer a l'evenement de cliquer sur un lien externe l'execution de la fonction 'openNewTab'
    $("a.external").click(openNewTab)    }
);

// Fonction pour ouvrir le lien dans un nouvel onglet
function openNewTab() {
  window.open(this.href);
  return false;
    
}

