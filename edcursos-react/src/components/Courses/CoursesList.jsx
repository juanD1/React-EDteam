import React from "react";
import Course from "./Course";
//Assets
import "./css/courses-list.css";

const CoursesList = (
  props //HIJO DINAMICO, CAMBIA EL CONTENIDO YA QUE POSEE MAS HIJOS
) => (
  <ul style={{ textAlign: "left" }}>
    {props.courses.map(course => (
      <Course
        key={course.id}
        id={course.id}
        name={course.name}
        poster={course.poster}
        url={course.url}
        amount={course.amount}
        teacher={course.teacher}
        date={course.date}
        categories={course.categories}
      />
    ))}
  </ul>
);

export default CoursesList;
