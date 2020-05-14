<<<<<<< HEAD

$(document).ready(function() {
    $('.header').load('menu.html');
});

function consultar(){
    var cedula = "";
    var url="http://appestrategico.online/prueba.php";
     $.ajax({
      type:"post",
      url:url,
      data:{cedula:cedula},
      success:function(datos){
        $("#formulario").html(datos);
    }

     })
     return true;
    }


=======

$(document).ready(function() {
    $('.header').load('menu.html');
});

function consultar(){
    var cedula = "";
    var url="http://appestrategico.online/prueba.php";
     $.ajax({
      type:"post",
      url:url,
      data:{cedula:cedula},
      success:function(datos){
        $("#formulario").html(datos);
    }

     })
     return true;
    }


>>>>>>> 2d81eaf0b44d0d247388123b4a5ecf9316483a60
