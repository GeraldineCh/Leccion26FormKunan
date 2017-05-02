//Para Select de Edad
var min = 18,
    max = 90,
    select = document.getElementById('age');

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

//Para Select de Región
var region = ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho"," Cajamarca"," Callao"," Cuzco"," Huancavelica"," Huánuco"," Ica"," Junín"," La Libertad"," Lambayeque ","Lima ","Loreto ","Madre de Dios ","Moquegua","Pasco"," Piura"," Puno"," San Martín"," Tacna"," Tumbes"," Ucayali"],
    select = document.getElementById('region');

for(var i = 0; i < region.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = region[i];
    opt.value = region[i];
    select.appendChild(opt);
}

//Para checkbox de sexo ARREGLAR
function opcion (){
if (document.getElementById("male").checked = true) {
    document.getElementById("female").checked = false;
}
else {
    document.getElementById("male").checked = false;
}};
opcion();

//Para Select de Región de residencia
var select = document.getElementById('home');

for(var i = 0; i < region.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = region[i];
    opt.value = region[i];
    select.appendChild(opt);
}

//Select para tipo de organizacion
var tipos = ["ONG", "Fundaciones", "Asociación Civil", "Empresa", "Persona Natural", "Otros"],
    select = document.getElementById('or-type');

for(var i = 0; i < tipos.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = tipos[i];
    opt.value = tipos[i];
    select.appendChild(opt);
}

//Generar checkbox de regiones
var select = document.getElementById('region-ch');

for(var i = 0; i < region.length; i++) {
    var opt = document.createElement('check-box');
    opt.innerHTML = region[i];
    opt.value = region[i];
    select.appendChild(opt);
}