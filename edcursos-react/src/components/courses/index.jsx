//COMPONENTE CON ESTADO- CONTAINERS
//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import uid from "uid";
//Data
import { categories, courses, teachers } from "../../data/";
//Components
import CourseAddForm from "./CourseAddForm";
import CoursesList from "./CoursesList";
import Loader from "./global/Loader";

class Courses extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      courses: courses,
      categories: categories,
      teachers: teachers,
      isLoading: false
    };
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
  }

  handleOnAddCourse(e) {
    e.preventDefault(); //no procesar el form
    let form = e.target;
    let course = {
      id: form.id.value ? form.id.value : Courses.defaultProps.id,
      name: form.name.value ? form.name.value : Courses.defaultProps.name,
      poster: form.poster.value
        ? form.poster.value
        : Courses.defaultProps.poster,
      url: form.url.value ? form.url.value : Courses.defaultProps.url,
      amount: form.amount.value
        ? form.amount.value
        : Courses.defaultProps.amount,
      teacher: form.teacher.value
        ? form.teacher.value
        : Courses.defaultProps.teacher,
      date: form.date.value ? form.date.value : Courses.defaultProps.date,
      categories: form.categories.value
        ? form.categories.value.split(",")
        : Courses.defaultProps.categories
    };

    this.setState({
      courses: this.state.courses.concat([course]),
      isLoading: true
    });

    form.reset();
  }

  render() {
    if (!this.state.courses.length) {
      return (
        <article className="Main-container">
          <p>No hay cursos :(</p>
        </article>
      );
    } else {
      if (this.state.isLoading) {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2500);
        return <Loader />;
      } else {
        return (
          <article className="Main-container">
            <CourseAddForm onAddCourse={this.handleOnAddCourse} />
            <CoursesList courses={this.state.courses} />
          </article>
        );
      }
    }
  }
}

Courses.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
};

Courses.defaultProps = {
  id: uid(10),
  name: "Curso Desconocido",
  poster: "https://ed.team/sites/default/files/edteam-logo-118.png?2abr2017",
  url: "https://ed.team/cursos",
  amount: 40,
  teacher: "Profesor No Asignado",
  date: "Fecha No Definida",
  categories: ["Sin Categoría"]
};

export default Courses;
