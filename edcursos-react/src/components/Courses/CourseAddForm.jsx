//Dependencies
import React from "react";
import uid from "uid";
import { categories, teachers } from "../../data/";
//Components
import Calendar from "./Calendar";
import MultiSelect from "./MultiSelect";
//Assents
import "pure-css/lib/forms.css";
import "pure-css/lib/buttons.css";
import "./css/course-add-form.css";

const optionsTeaches = teachers.map(teacher =>
  Object.assign({}, { label: teacher, value: teacher })
);

const optionsCategories = categories.map(category =>
  Object.assign({}, { label: category, value: category })
);

const CourseAddForm = (
  props //COMPONENTE SIN ESTADO- REPRESENTACIONALES
) => (
  <form className="pure-form AddForm" onSubmit={props.onAddCourse}>
    <input type="hidden" name="id" value={uid(10)} />
    <input type="text" placeholder="Nombre del curso" name="name" />
    <input type="url" placeholder="poster" name="poster" />
    <input type="url" placeholder="web" name="url" />
    <input type="number" placeholder="costo" name="amount" />
    <MultiSelect
      name="teacher"
      placeholder="Elige el profesor(es) del curso"
      options={optionsTeaches}
    />
    <MultiSelect
      name="category"
      placeholder="Elige el profesor(es) del curso"
      options={optionsCategories}
    />
    <Calendar name="date" />
    <input
      className="pure-button pure-button-primary"
      type="submit"
      value="Guardar"
    />
  </form>
);

export default CourseAddForm;
