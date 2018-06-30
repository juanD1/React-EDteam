//Dependencies
import React from "react";
import uid from "uid";
import Calendar from "./Calendar";

const CourseAddForm = (
  props //COMPONENTE SIN ESTADO- REPRESENTACIONALES
) => (
  <form onSubmit={props.onAddCourse}>
    <input type="text" placeholder="Nombre del curso" name="name" />
    <input type="text" placeholder="Nombre del profesor" name="teacher" />
    <Calendar name="date" />
    <input type="hidden" name="id" value={uid(10)} />
    <input type="submit" value="Guardar" />
  </form>
);

export default CourseAddForm;
