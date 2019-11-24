$(document).ready(  
    
    function () {    


         //Ecrivez le code pour initiallement cacher tous les contenus des articles
        $("p").hide();
        
        //Ecrivez le code pour associer a l'evenement de cliquer sur le titre d'un article l'execution de la fonction 'toggleContent'
        $("article h2").click(toggleContent); 
    }
);


// Fonction pour afficher le contenu de l'article (s'il est cache) ou pour cacher le contenu de l'article (s'il est affiche)
function toggleContent(event) {
  var idArticle = $(this).parent().parent().attr("id");   
  $("#" + idArticle + "section").toggle();

    
}