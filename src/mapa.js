$(document).ready(function(){
    var Pais = $(".Pais");
    var mapa = $("#mapa");
    var boton1 = $("#boton1");
    var boton2 = $("#boton2");
    var boton3 = $("#boton3");

    Pais.mouseenter(function(){
      $(this).fadeTo("fast", 0.5);
    
    });
    
    Pais.mouseleave(function(){
        $(this).fadeTo("fast", 1);
    });

    boton1.click(function(){
        $(mapa).css({fill:"#B04756"})
    });
    boton2.click(function(){
        $(mapa).css({fill:"#4B58A8"}) 
    });
    boton3.click(function(){
        $(mapa).css({fill:"#3E8C51"})  
    });

});

