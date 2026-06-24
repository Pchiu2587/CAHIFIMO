//----------------------------------
// MAPA
//----------------------------------

const map = L.map('map').setView([16.736, -92.637], 13);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'CAHIFIMO'
}
).addTo(map);

//----------------------------------
// HUMEDALES
//----------------------------------

L.marker([16.730,-92.640])
.addTo(map)
.bindPopup("Parque Los Humedales");

L.marker([16.724,-92.628])
.addTo(map)
.bindPopup("Humedal María Eugenia");

L.marker([16.742,-92.647])
.addTo(map)
.bindPopup("Humedal La Kisst");

//----------------------------------
// DATOS SIMULADOS
//----------------------------------

function actualizarDatos(){

let temp=(20+Math.random()*10).toFixed(1);

let humedad=(50+Math.random()*40).toFixed(0);

let agua=(18+Math.random()*6).toFixed(1);

let entrada=Math.floor(540+Math.random()*80);

let salida=Math.floor(590+Math.random()*40);

document.getElementById("temp").innerHTML=
temp+" °C";

document.getElementById("humedad").innerHTML=
humedad+" %";

document.getElementById("tempAgua").innerHTML=
agua+" °C";

//----------------------------------
// LLUVIA
//----------------------------------

let lluviaEstados=[
"Sin lluvia",
"Lluvia ligera",
"Lluvia moderada",
"Lluvia fuerte"
];

let lluvia=
lluviaEstados[
Math.floor(Math.random()*4)
];

document.getElementById("lluvia").innerHTML=
lluvia;

//----------------------------------
// TURBIDEZ
//----------------------------------

document.getElementById("entrada").innerHTML=
entrada<590 ?
"Agua sucia":
"Agua ligera";

document.getElementById("salida").innerHTML=
salida>615 ?
"Agua limpia":
"Agua ligera";

//----------------------------------
// ALERTAS
//----------------------------------

if(entrada<560){

document.getElementById("estado")
.innerHTML="🔴 CRITICO";

document.getElementById("estado")
.className="rojo";

document.getElementById("mensaje-alerta")
.innerHTML=`

⚠ ALERTA AMBIENTAL

Posible contaminación detectada.

Difusión automática:

Facebook
WhatsApp
Correo Comunitario

`;

}
else{

document.getElementById("estado")
.innerHTML="🟢 NORMAL";

document.getElementById("estado")
.className="verde";

document.getElementById("mensaje-alerta")
.innerHTML=
"Sin alertas ambientales.";

}

}

//----------------------------------
// GRAFICA
//----------------------------------

const ctx=
document.getElementById('grafica');

new Chart(ctx,{
type:'line',
data:{
labels:[
'0h','4h','8h',
'12h','16h','20h','24h'
],
datasets:[{
label:'Turbidez',
data:[565,570,575,590,600,610,620]
}]
}
});

actualizarDatos();

setInterval(
actualizarDatos,
5000
);