//Dependencies
import React from "react";
import uid from "uid";
import Calendar from "./Calendar";
import MultiSelect from "./MultiSelect";
import { categories, teachers } from "../../data/";

const optionsTeaches = teachers.map(teacher =>
  Object.assign({}, { label: teacher, value: teacher })
);

const CourseAddForm = (
  props //COMPONENTE SIN ESTADO- REPRESENTACIONALES
) => (
  <form onSubmit={props.onAddCourse}>
    <input type="hidden" name="id" value={uid(10)} />
    <input type="text" placeholder="Nombre del curso" name="name" />
    <MultiSelect
      name="teacher"
      placeholder="Elige el profesor(es) del curso"
      options={optionsTeaches}
    />
    <Calendar name="date" />
    <input type="submit" value="Guardar" />
  </form>
);

export default CourseAddForm;
