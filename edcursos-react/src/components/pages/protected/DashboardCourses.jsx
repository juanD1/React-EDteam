import React, { Component } from "react";
import Courses from "../../courses/";

class Protegida extends Component {
  render() {
    return (
      <article className="Main-container">
        <h1>Seccion Protegida</h1>
        <Courses />
      </article>
    );
  }
}

export default Protegida;
