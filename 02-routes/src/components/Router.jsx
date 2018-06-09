import React from 'react'
import {
	BrowserRouter,	//Invocar el manejo de rutas
	Route,					//Manejo de rutas
	Link,						//Manejo de enlaces
	Redirect,				//Manejo de redirecciones
	withRouter			//Switch para modificar el valor de una ruta
} from 'react-router-dom'

const StaticSite = () => (
	<h1>Primeros pasos con React Router Dom</h1>
)

const Home = () => (
	<div>
		<h2>Hola bienvenid@ a mi WebApp React :D</h2>
	</div>
)

const Acerca = () => (
	<div>
		<h2>Hola bienvenid@ Soy Juan David Coronado Saldaña</h2>
	</div>
)

const Servicios = () => (
	<ul>
		<li>Instrucciones web</li>
		<li>Diseño y desarrollo web</li>
	</ul>
)

const Contacto = () => (
	<div>
		<h2>Informacion de Contacto</h2>
	</div>
)



export default StaticSite