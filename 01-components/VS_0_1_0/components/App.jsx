import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseAddForm from './CourseAddForm'
import CoursesList from './CoursesList'

import logo from '../logo.svg';
import './App.css';

class App extends Component {    

  constructor(...props) {
    super(...props)
    this.state = {
      courses: [
        {id: 1, name: 'React desde cero', teacher: 'Jhon Mircha'},
        {id: 2, name: 'HTML5 desde cero', teacher: 'Juan Coronado'}
      ]
    }
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
  }

  handleOnAddCourse(e){
    //alert("function Add Course")
    e.preventDefault() //no procesar el form    

    let course = {
      id: (e.target.id.value) ? e.target.id.value : App.defaultProps.id,
      name: (e.target.name.value) ? e.target.name.value : App.defaultProps.name,
      teacher: (e.target.teacher.value) ? e.target.teacher.value : App.defaultProps.teacher
    }

    this.setState({
      courses: this.state.courses.concat([course])
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Juanda Coronado To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <CourseAddForm onAddCourse={this.handleOnAddCourse} />
        <CoursesList courses={this.state.courses} />      
      </div>  
    );
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}

App.defaultProps = {
  name: 'Curso Desconocido',
  teacher: 'Profesor No Asignado'
}

export default App;
