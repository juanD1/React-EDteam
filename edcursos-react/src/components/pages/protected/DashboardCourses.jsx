import React, { Component } from "react";
import App from "../../components/Courses/App";

class Protegida extends Component {
  render() {
    return (
      <article className="Main-container">
        <h1>Seccion Protegida</h1>
        <App />
      </article>
    );
  }
}

export default Protegida;
