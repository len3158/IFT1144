
$(document).ready(  
    
    function () {    

        // Ajoutez du code ici pour associer a l'evenement de modification du champ 'confcourriel  l'execution de la fonction 'checkEmails'
        $("#confcourriel").change(checkEmails)
    
        // Ajoutez du code ici pour associer a l'evenement de modification du champ 'courriel  l'execution de la fonction 'checkEmails'
        $("#courriel").change(checkEmails)
     }
);



// Fonction pour verifier que si les deux adresses sont identiques
function checkEmails(change) {
       if ($('#courriel').val() != $("#confcourriel").val()) {
             document.getElementById("confcourriel").setCustomValidity('Les deux adresses de courriel doivent être identiques.');

      } else {
            document.getElementById("confcourriel").setCustomValidity('');
         
      }
}