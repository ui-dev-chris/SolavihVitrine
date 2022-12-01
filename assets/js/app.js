/* --------------------------------------------------------------
        SYSTEME DE MENU TOGGLE
 ---------------------------------------------------------------*/
// jQuery
$(document).ready(function() {
    
    $(function() { 
	
        var windowWidth= $(window).width();
        if(windowWidth < 920){
            alert("bien");
        }
           
    });
    

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
    
})