//COMPONENTE CON ESTADO- CONTAINERS
//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import uid from "uid";
//Data
import { courses } from "../../data/";
//Components
import CourseAddForm from "./CourseAddForm";
import CoursesList from "./CoursesList";

class App extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      courses: courses
    };
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
  }

  handleOnAddCourse(e) {
    e.preventDefault(); //no procesar el form
    let form = e.target;
    let course = {
      id: form.id.value ? form.id.value : App.defaultProps.id,
      name: form.name.value ? form.name.value : App.defaultProps.name,
      teacher: form.teacher.value
        ? form.teacher.value
        : App.defaultProps.teacher
    };

    this.setState({
      courses: this.state.courses.concat([course])
    });

    form.reset();
  }

  render() {
    if (!this.state.courses.length) {
      return (
        <div>
          <p>No hay cursos :(</p>
          <button onClick={this.fetchData}>Cargar cursos</button>
        </div>
      );
    } else {
      return (
        <div>
          <CourseAddForm onAddCourse={this.handleOnAddCourse} /> &nbsp;
          <CoursesList courses={this.state.courses} /> &nbsp;
          <button onClick={this.resetData}>Borrar datos</button>
        </div>
      );
    }
  }
}

App.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
};

App.defaultProps = {
  id: uid(10),
  name: "Curso Desconocido",
  teacher: "Profesor No Asignado"
};

export default App;
