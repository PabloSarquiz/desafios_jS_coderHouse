
$('#caja1').hide()
$('#animar').hide()
$('#estirar').hide()

$('#boton1').click(function(){
    $('#caja1').toggle('fast')
    $('#caja2').toggle('slow')
    
})

$('#mostrar').click(function(){
    $('#caja1').show()
    $('#caja2').show()
    $('#boton1').hide()
    $('#animar').show()
    $('#mostrar').hide()
})

$('#animar').click(function(){
    $('#caja1').animate({height: '400px', width: "550px"}, "slow")
    $('#caja2').animate({height: '400px', width: "550px"}, "slow")
    $('#caja1').animate({height: '200px', width: "650px"}, "slow")
    $('#caja2').animate({height: '200px', width: "650px"}, "slow")
    $('#caja1').animate({height: '300px', width: "550px"}, "slow")
    $('#caja2').animate({height: '300px', width: "550px"}, "slow")
    $('#caja1').animate({height: '650px', width: "650px"}, "slow")
    $('#caja2').animate({height: '650px', width: "650px"}, "slow")
    $('#caja1').animate({height: '300px', width: "550px"}, "slow")
    $('#caja2').animate({height: '300px', width: "550px"}, "slow")
    $('#estirar').show()
    $('#animar').hide()
})

$('#estirar').click(function(){
    $('#caja1').css("width", "100%")
    $('#caja2').css("width", "100%")
    $('#estirar').hide()
    $('#animar').show()
    $('#roto').show()
})


$('#roto').click(function(){
    $('#caja1').hide()
    $('#caja2').hide()
    $('#estirar').hide()
    $('#alternar').hide()
    $('#animar').hide()
    $('#roto').hide()
    
})
