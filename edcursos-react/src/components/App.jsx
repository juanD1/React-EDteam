//COMPONENTE CON ESTADO- CONTAINERS
//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import uid from "uid";
import $ from "jquery";
//Data
import { courses } from "../data/courses.json";
//Components
import CourseAddForm from "./CourseAddForm";
import CoursesList from "./CoursesList";
//Assets
import logo from "../logo.svg";
import "./App.css";

class App extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      // courses: courses
      courses: []
    };
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.resetData = this.resetData.bind(this);
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    $("#root")
      .fadeOut(2000, () => this.setState({ courses: courses }))
      .fadeIn(2000);
  }

  resetData() {
    $("#root")
      .fadeOut(2000, () => this.setState({ courses: [] }))
      .fadeIn(2000);
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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Welcome to React aplication make Juanda
            </h1>
          </header>
          <p className="App-intro">
            Juanda Coronado To get started, edit <code>src/App.js</code> and
            save to reload.
          </p>
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
