
let arregloFrutas = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
let estado = '';

exports.frutas = function(fruta){
    for(i in arregloFrutas){
        if(arregloFrutas[i] == fruta){
            estado = true;
        }
    }
    if(estado == true){
        console.log('Si se encuentra la fruta');
    }else{
        console.log('No se encuentra la fruta');
    }
}
