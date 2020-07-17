"use strict";

//********************************
//*** Obteniendo datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function () {

    fetch('http://jsonplaceholder.typicode.com/posts') // Trae los datos
    .then(data => data.json()) // Trabaja con los datos
    .then(data => {
        posts = data;
        mostrarDatos(posts)
    })

}); // Agregando comment para testear el GIT nuevamente

function mostrarDatos(posts) {
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}