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

const Contacto = ( { match } ) => (
	<div>		
		<h2>Informacion de Contacto</h2>
		<Route exact path={match.url} render={() => (
			<h3> mantente en contacto conmigo :D</h3>
		)}/>
		<ul>
			<li><Link to={`${match.url}/email`}>Email</Link></li>
		</ul>
		<Route path={`${match.url}/email`} render={()=> (
			<a href='https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1528687383&rver=7.0.6736.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d0273f059-06d6-7794-c2a5-1744b24da6ce&id=292841&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015' target='_blank'>jonmircha@gmail.com</a>
		)} />
	</div>
)



export default StaticSite