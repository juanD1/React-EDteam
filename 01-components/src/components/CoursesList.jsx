import React from 'react'
import Course from './Course'

const CoursesList = (props) => (
  <div style={{textAlign: 'left'}}>
      <form onSubmit={props.onAddCourse}>
          <input type="text" placeholder="Nombre del curso" name="name" require/>
          <input type="text" placeholder="Nombre del profesor" name="teacher" require/>
          <input type="hidden" name="id" value={Math.floor(Math.random()*100)}/>
          <input type="submit" value="Guardar" />
      </form>
      <ul>
          {
            props.courses.map(course => (
              <Course 
              key={course.id}
              id={course.id}
              name={course.name}
              teacher={course.teacher}
              />   
            ))            
          }
       </ul>                   
  </div>
)
    

export default CoursesList