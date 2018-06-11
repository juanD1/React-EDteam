import React, { Component } from 'react'
import {
	BrowserRouter,	//Invocar el manejo de rutas
	Route,					//Manejo de rutas
	Link,						//Manejo de enlaces
	Redirect,				//Manejo de redirecciones
	withRouter,			//Switch para modificar el valor de una ruta maneja el historial
	Switch
} from 'react-router-dom'

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		setTimeout(cb, 100) //fake async
	},
	signout(cb) {
		this.isAuthenticated = false
		setTimeout(cb, 100)
	}
}

const Home = () => <h3>Home</h3>
const Public = () => <h3>Content Public</h3>
const Protected = () => <h3>Content Potected</h3>

const AuthButton = withRouter(( { history }) => (
	(fakeAuth.isAuthenticated)
	?
		<div>
			<h2>Bienvenid@</h2>
			<button onClick={() => fakeAuth.signout(() => history.push('/') )}>Salir</button>
		</div>
	:
		<h2>No estas logueado :(</h2>
))

const PrivateRoute = ({ component: Component, rest }) => (
	<Route {...rest}  render={(props) => (
		fakeAuth.isAuthenticated
		?	<Component {...props} />
		:	<Redirect to={ {pathname: '/login', state: {from: props.location}} } />
	)} />
)

class Login extends Component {
	
	constructor(props) {
		super(props)
	
		this.state = {
			redirectRoute: false
		}
		this.login = this.login.bind(this)
	}

	login(){
		fakeAuth.authenticate(() => this.setState({ redirectRoute: true }))
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' }}
		const { redirectRoute } = this.state

		if ( redirectRoute ) {
			return (
				<Redirect to={ from } />
			)
		} else {
			return (
				<div>
					<h3>Debes estar logueado para ver esta pagina <mark>{from.pathname}</mark></h3>
					<button onClick={this.login}>Login in</button>
				</div>
			)
		}
	}
}

const AuthSite = () => (
	<BrowserRouter>
		<div>
			<AuthButton />
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/public'>Content Public</Link></li>
				<li><Link to='/protected'>Content Potected</Link></li>
			</ul>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/public' component={Public} />
				<PrivateRoute path='/protected' component={Protected}/>
				<Route path='/login' component={Login} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AuthSite