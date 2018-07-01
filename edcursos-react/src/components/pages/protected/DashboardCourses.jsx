import React, { Component } from "react";
import Courses from "../../courses/";

class Protegida extends Component {
  render() {
    return (
      <article className="Main-container">
        <Courses />
      </article>
    );
  }
}

export default Protegida;
