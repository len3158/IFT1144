// Le tableau ci-dessous contient les chemins relatifs pour les images
var image = new Array ();

//Contenu du tableau pour ajouter les chemins pour les images du web
image[0] = "images/1951F1Ferrari375.jpg";
image[1] = "images/nico-rosberg-W05.jpg";
image[2] = "images/back-img.jpg";

var size = image.length
var x = Math.floor(size*Math.random())
var chosenImage = image[x]

//Code pour donner la valeur de la variable 'chosenImage' à l'attribut 'src' de l'image de la page d'accueil 
$('#random').attr('src',chosenImage);
