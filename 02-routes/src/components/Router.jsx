import React from 'react'
import {
	BrowserRouter,	//Invocar el manejo de rutas
	Route,					//Manejo de rutas
	Link,						//Manejo de enlaces
	Redirect,				//Manejo de redirecciones
	withRouter			//Switch para modificar el valor de una ruta
} from 'react-router-dom'

const StaticSite = () => (
	<BrowserRouter>
		<div>
			<h1>Primeros pasos con React Router Dom</h1>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/acerca'>Acerca</Link></li>
				<li><Link to='/servicios'>Servicios</Link></li>
				<li><Link to='/contacto'>Contacto</Link></li>
			</ul>
			<hr/>
			<Route path='/' component={Home} />		
			<Route path='/acerca' component={Acerca} />		
			<Route path='/servicios' component={Servicios} />		
			<Route path='/contacto' component={Contacto} />
		</div>		
	</BrowserRouter>	
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