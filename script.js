// esta función es el programa pares y nones
function jugar(){
var jugador,  maquina;
// definimos jugador y maquina 
jugador =[];
maquina =[];
    // el jugador elige,//////////////////////////
  jugador[0] = 'impares';
   // jugador[0] = prompt('elige pares o impares');
    // maquina lo contrario de jugador
    if(jugador[0]==='pares'){
  maquina[0]='impares';}
    else{
        maquina[0]='pares';
    }
    console.log(jugador[0]);
     console.log(maquina[0]);
    //////// saca dedos jugador/////////////////
    jugador[1]=5;
   // jugador[1]=Number(prompt('Elige un numero del 1 al 10'));
    //saca dedos máquina
   console.log(jugador[1]); maquina[1]=Math.floor(Math.random()*11);
    console.log(maquina[1]);
    // evaluamos jugada
    var evaluar = (jugador[1]+maquina[1])%2;
    console.log('evaluar es igual a ' +evaluar);
    // decidimos quien gana
    if (evaluar===0){// si sales pares
        if(jugador[0]==='pares'){
                console.log('jugador gana');
                console.log('maquina pierde'); 
            }else{
               console.log('jugador pierde');
                console.log('maquina gana'); 
            }
         }
     if (evaluar===1){// si sales impares
        if(jugador[0]==='pares'){
                console.log('jugador pierde');
                console.log('maquina gana'); 
            }else{
               console.log('jugador gana');
                console.log('pierde maquina'); 
            }
         }
    
}
jugar();


