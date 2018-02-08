import React, { Component } from 'react';
import CoursesList from './CoursesList'

import logo from '../logo.svg';
import './App.css';

class App extends Component {

  constructor(...props) {
    super(...props)
    this.state = {
      courses: [
        {id: 1, name: 'React desde cero', teacher: 'Jhon Mircha'},
        {id: 2, name: 'HTML5 desde cero', teacher: 'Juan Coronado'},
      ]
    }
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
  }

  handleOnAddCourse(e){
    alert("function Add Course")
    e.preventDefault() //no procesar el form

    let course = {
      id: e.target.id.value,
      name: e.target.name.value,
      teacher: e.target.teacher.value
    }

    this.setState({
      course: this.state.courses.concat([course])
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
        <CoursesList 
        courses={this.state.courses}
        onAddCourse={this.handleOnAddCourse}
        />      
      </div>  
    );
  }
}

export default App;
