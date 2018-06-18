import React, { Component } from "react";
import { login } from ".././helpers/Auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { loginMessage: null };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    alert("Enviando formulario...");
    login(this.email.value, this.password.value).catch(error =>
      this.setState(this.setErrorMessage("Usuario o Password incorrectos"))
    );
  }

  setErrorMessage(err) {
    return { loginMessage: err };
  }

  render() {
    return (
      <article className="Main-container">
        <h1>Seccion de login</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="email"
            placeholder="Email"
            ref={email => (this.email = email)}
          />
          <input
            type="password"
            placeholder="Password"
            ref={password => (this.password = password)}
          />
          {this.state.loginMessage && ( //operador de cortocircuito
            <div className="erro">
              <p>Error: {this.state.loginMessage}</p>
            </div>
          )}
          <input type="submit" value="Login" />
        </form>
      </article>
    );
  }
}

export default Login;
