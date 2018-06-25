//Dependencies
import React, { Component } from "react";
import { login, resetPassword } from ".././helpers/Auth";
//Assets
import "pure-css/lib/forms.css";
import "pure-css/lib/buttons.css";
import "./login-register.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { loginMessage: null };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    alert("Enviando formulario...");
    login(this.email.value, this.password.value).catch(error =>
      this.setState(this.setMessage("Usuario o Password incorrectos"))
    );
  }

  setMessage(err) {
    return { loginMessage: err };
  }

  resetPassword() {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          this.setMessage(
            `Se ha enviado un correo electronico a <b>${
              this.email.value
            }</b> para reestablecer tu constraseña`
          )
        )
      )
      .catch(err =>
        this.setState(
          this.setMessage(`El emal ${this.email.value} no esta registrado`)
        )
      );
  }

  render() {
    return (
      <article className="Main-container">
        <h1>Login</h1>
        <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
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
            <div className="u-error">
              <p>
                Error:&nbsp;&nbsp;{this.state.loginMessage},&nbsp;
                <a
                  role="button"
                  onClick={this.resetPassword}
                  className="alert-Link"
                >
                  ¿Olvidaste tu constraseña?
                </a>
              </p>
            </div>
          )}
          <input
            type="submit"
            className="pure-button pure-button-primary"
            value="Login"
          />
        </form>
      </article>
    );
  }
}

export default Login;
