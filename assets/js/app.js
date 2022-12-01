/* --------------------------------------------------------------
        SYSTEME DE MENU TOGGLE
 ---------------------------------------------------------------*/
// jQuery
$(document).ready(function() {

    $('#navigation .menu').hide();
    

    // afficher le menu et le btn-fermee 
    $('#navigation .btn-toggle').click(function(e){
        
        $('#navigation .menu').show();
        $('#navigation .user a.lien').show();
        e.preventDefault();

    })

    $('#navigation .btn-ferme').click(function(e){
        
        $('#navigation .menu').hide();
        e.preventDefault();

    })

    // lorsqu'on click sur un lien du menu
    $('#navigation .menu a.lien').click(function(e){
        
        $('#navigation .menu').hide();

    })
    
})