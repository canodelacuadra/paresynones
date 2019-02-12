// la función pasopantalla coge dos parámetros, la pantalla que desaparece y la pantalla a la que va.
function pasopantalla(pantallaOff, pantallaOn){
 document.getElementById(pantallaOff).style.display='none';
document.getElementById(pantallaOn).style.display='inline-block';
    document.getElementById('efecto').play();
}
////// Empiezan los manejadores de eventos. El evento addventlistener lo pasamos con una función anónima porque la función pasopantalla tiene parámetros///////

// activamos un envento en el boton con id entrar para disparar la función pasopant2
document.getElementById('entrar').addEventListener('click',function(){pasopantalla('pantalla1', 'pantalla2')});
// activamos un envento en el boton con id entrar para disparar la función pasopant4
document.getElementById('comjuego').addEventListener('click',function(){pasopantalla('pantalla2', 'pantalla4')});

// activamos un envento en el boton con id despedida para ir a la pantalla 5
document.getElementById('despedida').addEventListener('click',function(){pasopantalla('pantalla4', 'pantalla5')});

// activamos un envento en el boton con id volver para a la pantalla 2
document.getElementById('volver').addEventListener('click',function(){pasopantalla('pantalla4', 'pantalla2')});








