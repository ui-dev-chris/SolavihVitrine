/* --------------------------------------------------------------
        SYSTEME DE MENU TOGGLE
 ---------------------------------------------------------------*/
// jQuery
$(document).ready(function() {

    $(function() { 
	
        var windowHeight= $(window).height();
        if(windowHeight < 920){
            
            // masquer le menu-toggle
            $('#navigation .menu').hide();
            
            // clicker sur le btn-toggle
            $('#navigation .btn-toggle').click( function(e){

                // afficher le menu-toggle
                $('#navigation .menu').show();

                $('#navigation.user a.lien').show();
                
                e.preventDefault();
                
            } )

            // clicker sur le btn-ferme
            $('#navigation .btn-ferme').click( function(e){

                // ferme le menu
                $('#navigation .menu').hide();

                e.preventDefault();
                
            } )

            // clicker sur les lien du menu
            $('#navigation .menu a.lien').click( function(e){

                // ferme le menu
                $('#navigation .menu').hide();


                //e.preventDefault();
                
            } )

        }
           
    });
    


    

})