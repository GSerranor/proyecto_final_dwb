
function validar(){
    var nombre_title = document.getElementById('name')
    var anio_title = document.getElementById('year')
    var nombre = document.getElementById('nombre');
    var anio = document.getElementById('anio');
    var flag = 0;

    if ( nombre.value.length >= 10 ){
        nombre_title.style.color = "red";
        flag = 1;
    }
    else{
        nombre_title.style.color = "black";
    }

    if ( anio.value < 1950 || anio.value > 2021 ){
        anio_title.style.color = "red";
        flag = 1;
    }
    else{
        anio_title.style.color = "black";
    }

    if ( flag ){
        alert("**Campos incorrectos**");
        return
    }
    location.replace('index.html');
    return
}